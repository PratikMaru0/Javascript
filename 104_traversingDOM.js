// More About DOM (Document Object Model)
// DOM Traversing.

// console.log("DOM traversing");  // Checking Purpose. 

// Timestamp :- 4:39:20. (u can watch it at 2x speed.)

// Refer DOM Diagram and see how our file will look like. 

// REFEERING TO DOMDiagram (Tree)
// Document :- Is the root node of JS object.
// HTML :- is the child of the Document becoz Document k andar likha hai HTML ka code. HTML is the root element becoz sabse pehla element yani tag <HTML/> hi hota hain in HTML file.  
// Phir browser dekhega yaha 2 elements hai inside HTML tag. 1). Head and 2). Body. So sabse pehle <Head/> tag hai isse left side mai add kardo and right side mai <Body/> ko add kardo. (NOTE: Browser pehle head ko pura karega phir left mai jakr Body k pura karega.). Phir Head k andar jaega and same upar wali chij karega left-right , left-right. Note:- Browser \n , "   " spaces ko bhi store karta hai in tree. 

// Yeh jo squares hai in Image. (refer img 104DOMDiagram.jpg)
// Isse hum kya bol sakte hai
// 1). Child node of document (in case of HTML)
// 2). Element node (for all eg:- HTML,Head etc)
// 3). Title ko hum "child node of Head" bol sakte hai.
// 4). \n,spaces="  " ko hum "textNode" kahege. 


// TODO: yeh jo hai DOM-Diagram jisse hum tree bhi kehte hai iska bohot fayda hai kyunki DOM haina is page ko tree k structure mai store karta hai. And tree data structure we know. We have learnt this in Data Structure and Alogorithms.

// This is how this tree is made by the DOM to store the webPage.  

// Ab hum sochege iska fayda kya hoga. 
// Iska fayda yeh hoga ki hum isse traverse kr sakte hai. Agar humae root node pata hoga toh hum tree mai kahi bhi ja sakte hai becoz here everything is connected so by traversing we can go anywhere we want to go or find anything easily by traversing. 


// Now lets see how we can traverse an DOM Tree.

// const rootNode = document.getRootNode();
// console.log(rootNode);  // Boom we got root node.

// const ans = rootNode.childNodes;  // Boom we got child nodes of the root node.
// console.log(ans);

// const ans = rootNode.childNodes[1];  // accessing the 2nd node of the childNode.
// console.log(ans);

// const ansChildNodes = ans.childNodes;  // Accessing rootNode's 2nd chlid's child nodes.
// console.log(ansChildNodes);    // Yeh NodeList dega output mai.

// Browser ignores "textNodes" which is not important. Becoz in "textNodes" there is \n and spaces. Which is of no use if it is displayed as a child nodes.

// const parentNodes = ansChildNodes[0].parentNode;
// console.log(parentNodes);

// const headNode = ansChildNodes[0];
// console.log(headNode);
// const pNode = headNode.parentNode;
// console.log(pNode);  // Boom we got parent node.

// See we saw parent, child relationship now we'll see sibling relationship

// Comment out above whole code to execute below lines of code otherwise error ayega.

// const rootNode = document.getRootNode();
// const htmlElement = rootNode.childNodes[1];
// const HeadElement = htmlElement.childNodes[0];
// console.log(HeadElement.nextSibling.nextSibling);
// console.log(HeadElement.nextSibling); // See output of this code inside chrome console and expand that data and see there you will find data: key at 4th line where value is \n means tree has textNodes which we dont get in output when we want to print an Object becoz its of no use. 

// console.log(HeadElement.nextSibling.nextElementSibling); // To ignore whitespaces in output. 