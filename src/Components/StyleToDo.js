import Styled from "styled-components"

// TODO----->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const Container = Styled.form`
    display: flex ;
    justify-content : center ;
    align-items : center ;

    height: 100vh ;



    background-image: radial-gradient(
    circle at 82.8% 17.2%,
    #0087ff 0,
    #0080ff 8.33%,
    #0077ff 16.67%,
    #006cff 25%,
    #655fff 33.33%,
    #9450ff 41.67%,
    #b53cf2 50%,
    #ce1edf 58.33%,
    #e200cb 66.67%,
    #f200b5 75%,
    #fd009f 83.33%,
    #ff0088 91.67%,
    #ff0072 100%
  );
`

export const BoxToDo = Styled.div`
width : 15rem ;
    height: 85vh ;
`
export const Box_I_B = Styled.div`
    width: 100% ;

    input{
        width: 100% ;
        border-radius: 10px ;
        border: 1px solid ;
        padding: 2% ;
    }
    button{
        display: none ;
    }
`

export const BoxList = Styled.div`
   width: 100% ;
   margin-top: 2rem ;
`

export const BoxUl = Styled.ul`
    list-style: none ;
    width: 100% ;
    margin: 0.5rem ;
`

export const BoxLi = Styled.li`
    display: flex ;
    justify-content: space-evenly ;

    img{
        width: 8% ;
        cursor: pointer ;
    }    
`