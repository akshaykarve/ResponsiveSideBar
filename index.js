document.addEventListener('click', e =>{
    const isSideBarButton = e.target.matches("[data-sidebar-button]")

    if(!isSideBarButton && e.target.closest('[data-sidebar]') !=null ) return;

    let currentSideBarOption;

    // console.log(isSideBarButton)
    if(isSideBarButton){
        if(e.target.matches("[adele]")){
            // console.log("in adele")
            // console.log(document.getElementById("adele").classList)//.classList["content-info"].toggle('active')
            currentSideBarOption = "adele";
            document.getElementById("adele").classList.toggle('active')
            // console.log(document.getElementById("adele").classList)
        }else if(e.target.matches("[kanna]")){
            currentSideBarOption = "kanna"
            document.getElementById("kanna").classList.toggle('active')//.classList["content-info"].toggle('active')
        }

        document.querySelectorAll('[content-info].active').forEach(content => {
            console.log(content.id);
            if(content.id === currentSideBarOption) return;
            content.classList.remove('active')
        })
    }
})

function toggleSideBar(){
    // console.log(document.querySelector('[sidebar-button]').innerHTML)

    const sidebarButton = document.querySelector('[sidebar-button]');
    const sidebarContentAdele = document.querySelector("[adele]");
    const sidebarContentKanna = document.querySelector("[kanna]");

    // console.log(sidebarContent);

    if(sidebarButton.innerText === "<"){
        sidebarButton.innerText = ">"
        sidebarContentAdele.style.visibility="hidden"
        // sidebarContentAdele.style.display="none"
        sidebarContentKanna.style.visibility="hidden"
        // sidebarContentKanna.style.display="none"
    }else{
        sidebarButton.innerText = "<"
        sidebarContentAdele.style.visibility="visible"
        // sidebarContentAdele.style.display="flex"
        sidebarContentKanna.style.visibility="visible"
        // sidebarContentKanna.style.display="flex"
    }

    const sidebar = document.querySelector('[data-sidebar]');
    sidebar.classList.toggle('active')


}