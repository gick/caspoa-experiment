import router from '../router/index'

import { createStore } from 'vuex'
export default createStore(
  
  {

  state: {
    currentPlanes:[],
    currentTIC:[],
    selectedPlane:null,
    currentCols:[],
    user:{}
  },
  mutations: {
    // set a new set of planes accessible
    // to the CASDO
    setCurrentPlanes(state,payload){
      state.currentPlanes=payload.currentPlanes
    },
    addNewTIC(state,payload){
      state.currentTIC.push(payload.currentTIC)
    },
    setSelectedPlane(state,payload){
      state.selectedPlane=payload.selectedPlane
      for(let tic of state.currentTIC){
        if(tic.selected){
          tic.plane=state.selectedPlane
        }
      }
    }
    ,
    // we use startDate to identify uniquely TIC
    setActiveTIC(state,payload){
      for(let tic of state.currentTIC){
        tic.selected=false
        if(tic.startDate==payload.startDate){
          tic.selected=true
        }
      }
    },

    // set the current columns used for planes
    setCurrentCols(state,payload){
      state.currentCols=payload.currentCols
    },
    setUser(state,payload){
      state.user=payload.user
    },
    removeUser(state){
      state.user={}
    }

  },
  actions: {
  
    logout({commit}){
      fetch("http://localhost:3000/user/logout", { credentials: 'include' })
      .then(commit("removeUser"))
      .then(router.push('/login'))
    }
  },
  modules: {
  }
})
