import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.indexOf(role) >= 0)
//   } else {
//     return true
//   }
// }

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter(asyncRouterMap, roles) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(roles, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, roles)
//       }
//       return true
//     }
//     return false
//   })
//   return accessedRouters
// }
function filterAsyncRouter1(asyncRouterMap, permissionTree) {
  var myMap1
  var myArray1 = []
  for (var i = 0; i < permissionTree.length; i++) {
    myMap1 = {}
    for (var j = 0; j < asyncRouterMap.length; j++) {
      if (permissionTree[i].path === asyncRouterMap[j].path) {
        myMap1.path = asyncRouterMap[j].path
        myMap1.component = asyncRouterMap[j].component
        myMap1.meta = asyncRouterMap[j].meta
        myMap1.redirect = asyncRouterMap[j].redirect
        myMap1.alwaysShow = asyncRouterMap[j].alwaysShow
        var myMap2
        var myArray2 = []
        if (permissionTree[i].children) {
          for (var m = 0; m < permissionTree[i].children.length; m++) {
            myMap2 = {}
            for (var n = 0; n < asyncRouterMap[j].children.length; n++) {
              if (permissionTree[i].children[m].path === asyncRouterMap[j].children[n].path) {
                myMap2.path = asyncRouterMap[j].children[n].path
                myMap2.component = asyncRouterMap[j].children[n].component
                myMap2.name = asyncRouterMap[j].children[n].name
                myMap2.meta = asyncRouterMap[j].children[n].meta
                var myMap3
                var myArray3 = []
                if (permissionTree[i].children[m].children) {
                  for (var k = 0; k < permissionTree[i].children[m].children.length; k++) {
                    myMap3 = {}
                    for (var l = 0; l < asyncRouterMap[j].children[n].children.length; l++) {
                      if (permissionTree[i].children[m].children[k].path === asyncRouterMap[j].children[n].children[l].path) {
                        myMap3.path = asyncRouterMap[j].children[n].children[l].path
                        myMap3.component = asyncRouterMap[j].children[n].children[l].component
                        myMap3.name = asyncRouterMap[j].children[n].children[l].name
                        myMap3.meta = asyncRouterMap[j].children[n].children[l].meta
                        myArray3.push(myMap3)
                      }
                    }
                  }
                  myMap2.children = myArray3
                }
                myArray2.push(myMap2)
              }
            }
            myMap1.children = myArray2
          }
        }
      }
    }
    myArray1.push(myMap1)
  }
  // debugger
  // const accessedRouters = asyncRouterMap.filter(route => {
  //   return route.path.indexOf(permissionTree[0].path) > 0
  // })
  // alert(JSON.stringify(myArray1))
  return myArray1
}
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles, permissionTree } = data
        // let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          // alert('admin')
        } else {
          // alert('editor')
        }
        let accessedRouters1
        // 根据后台标识过滤路由表
        if (permissionTree === 'all') {
          accessedRouters1 = asyncRouterMap
          console.log('全部路由表')
        } else {
          accessedRouters1 = filterAsyncRouter1(asyncRouterMap, permissionTree)
          // for (const item of permissionTree) {
          //   if (item.hasChildren) {
          //     for (const citem of item.children) {
          //       console.log(citem)
          //     }
          //   }
          // }
        }
        // commit('SET_ROUTERS', accessedRouters)
        commit('SET_ROUTERS', accessedRouters1)
        resolve()
      })
    }
  }
}

export default permission
