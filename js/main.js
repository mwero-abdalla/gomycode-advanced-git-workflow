
(async()=>{
    const pageSections = ['price-plans', 'my-services', 'recommendations']


for( let section of pageSections){
    try {
         const content = await getFileContent(section)
    if(content)
        document.body.append(content)
    } catch (error) {
        console.log(error.message)
    }
   
}
})()