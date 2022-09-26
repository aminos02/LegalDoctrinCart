import { createSlice } from "@reduxjs/toolkit";


const basketSlice=createSlice({
    name:'basket',
    initialState:{
        cart:[],
        discount:[
            {
            id:1,
            count:0,
            value:0.5
            },
            {
                id:2,
                count:0,
                value:1
            }
    
    ],
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            let item=state.cart.find(item=>item.id===action.payload.id)
            if(item)
                item.quantity++;
            else
                state.cart.push({...action.payload,quantity:1})

            state.total+=item ?item.price:action.payload.price;
            
            //Discount ::
            if(item){
                if(item.id===3){
                    let d=Math.floor(item.quantity/2)
                    if(d>0)state.discount[0].count=d;
                }
                else if(item.id===2){
                    let d=Math.floor(item.quantity/3)
                    if(d>0)state.discount[1].count=d;
                }
            }
        },
        removeProduct:(state,action)=>{
            let item=state.cart.find(item=>item.id===action.payload.id)
            if(item.quantity>1){
                item.quantity-=1;               
            }
            else{
                state.cart=state.cart.filter(item=>item.id!==action.payload.id);
            }
            state.total-=item.price
              //Discount ::
              if(item){
                if(item.id===3){
                    let d=Math.floor(item.quantity/2)
                    state.discount[0].count=d;
                }
                else if(item.id===2){
                    let d=Math.floor(item.quantity/3)
                    state.discount[1].count=d;
                }
            }
        },

    }
})

export const {addProduct,removeProduct,} =basketSlice.actions;

export default basketSlice.reducer;