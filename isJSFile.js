function isJavaScriptFile(fileName) {
    return fileName.endsWith('.js');
  }
  
  const fileName1 = 'index.js';
  const fileName2 = 'style.css';
  
  console.log(isJavaScriptFile(fileName1)); 
  console.log(isJavaScriptFile(fileName2));
  