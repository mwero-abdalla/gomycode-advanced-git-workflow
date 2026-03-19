const getFileContent =async (sectionName)=>{
const res = await fetch(`${sectionName}.html`)
const page = await res.text()

     const parser = new DOMParser();
  const doc = parser.parseFromString(page, 'text/html');
    let  section = doc.querySelector('section');
    //extract the section content from page and assign it to the variable section
    console.log(section)
    return section
}

// getFileContent()