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
  debugger
  const accessedRouters = asyncRouterMap.filter(route => {
    return route.path.indexOf(permissionTree[0].path) > 0
  })
  return accessedRouters
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
          alert('admin')
        } else {
          alert('editor')
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
