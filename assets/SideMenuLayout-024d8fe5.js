import{j as n,N as s,a as i,O as c}from"./index-72f51eda.js";const o=()=>n("div",{style:e.container,children:[n(s,{to:"/",style:({isActive:t})=>t?e.activeLink:e.link,children:[i("span",{className:"material-icons",style:e.icon,children:"home"}),i("p",{style:e.text,children:"Home"})]}),n(s,{to:"/task-list",style:({isActive:t})=>t?e.activeLink:e.link,children:[i("span",{className:"material-icons",style:e.icon,children:"list"}),i("p",{style:e.text,children:"Task List"})]}),n(s,{to:"/task-progress",style:({isActive:t})=>t?e.activeLink:e.link,children:[i("span",{className:"material-icons",style:e.icon,children:"check_box"}),i("p",{style:e.text,children:"Task Progress"})]})]}),a={display:"flex",alignItems:"center",margin:"12px 0",textDecoration:"none"},e={container:{display:"flex",flexDirection:"column",backgroundColor:"#55ACC8",padding:"20px",minHeight:"100vh",height:"100%"},link:{...a,color:"#fff"},activeLink:{...a,color:"#255261"},icon:{fontSize:"40px"},text:{fontSize:"24px",marginLeft:"8px"}},d=()=>n("div",{style:l.container,children:[i("div",{style:l.sidebar,children:i(o,{})}),i("div",{style:l.main,children:i(c,{})})]}),l={container:{display:"flex",height:"100%",overflow:"hidden"},sidebar:{width:"20%"},main:{width:"80%"}};export{d as default};
