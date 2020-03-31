(this.webpackJsonppit_dataset=this.webpackJsonppit_dataset||[]).push([[0],{45:function(e,a,t){e.exports=t(69)},50:function(e,a,t){},51:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(20),l=t.n(i),o=(t(50),t(21)),s=t(27),m=t(28),d=t(35),c=t(36),p=t(11),h=t(32),u=t(24),g=(t(51),t(12)),f=t(42),E=t(34),x=t(33),y=t(19),w="\n\n@article{\n  FORD2019,\n  author = {Jordan Ford and Patrick Callaghan and Uland Wong \n  and Heather Jones and Warren Whittaker and Red Whittaker},\n  title = {Image and Lidar Dataset of the West Desert Sinkhole: \n  An Analog for Steep-Walled Planetary Pits},\n  conference = {Planetary Pits and Caves Conference},\n  year = {2019},\n}\n\n".trim(),v='  \n  \nx = numpy.linspace(0.0, 1.0, 10000)\ny = x + 5.0 + numpy.random.uniform(-0.1, 0.1, *x.shape)\ndf = pandas.DataFrame(data={"x": x, "y": y})\n\n'.trim(),b=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(g.a.Img,{variant:"top",src:this.props.imgSrc}),r.a.createElement(g.a.Body,{className:"text-center"},r.a.createElement("br",null),r.a.createElement("h4",null,this.props.title),r.a.createElement("br",null),r.a.createElement(p.a,{className:"text-center"},r.a.createElement(g.a.Text,{style:{fontSize:"15px",lineHeight:"20px"}},this.props.text))),r.a.createElement(g.a.Footer,{className:"text-center download-card-footer"},r.a.createElement(f.a,{variant:"primary"},"Download"),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},"approx. ",this.props.approxSize)))}}]),t}(r.a.Component),k=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(o.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,a=y.b,t=[{name:"Jordan Ford",email:["jsford","andrew.cmu.edu"]},{name:"Khaled Sharif",email:["khaled.sharif","nasa.gov"]},{name:"Uland Wong",email:["uland.wong","nasa.gov"]},{name:"William Whittaker",email:["red","cmu.edu"]},{name:"Warren Whittaker",email:["warrenw","andrew.cmu.edu"]},{name:"Heather Jones",email:["hjones","andrew.cmu.edu"]},{name:"Patrick Callaghan",email:["pac130","pitt.edu"]}],n=r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{imgSrc:"paper.jpg",title:"Paper",text:"This paper describes the collection apparatus and procedures used to create the dataset, the organization of the dataset, and anticipated applications for the dataset.",approxSize:"2 MB"}),r.a.createElement(b,{imgSrc:"lidar.png",title:"LiDAR",text:"Combined laser scans provide a dense, precise, textured model of the pit that is useful as ground truth for benchmarking image-derived models and algorithms, for developing and evaluating robot planning, and as a standalone data source for studying planetary pits.",approxSize:"10 GB"}),r.a.createElement(b,{imgSrc:"images.jpg",title:"Images",text:"Custom camera gantry captured sets of 1500 images from 27 locations encircling the West Desert Sinkhole at heights and angles relevant for small rover exploration, mapping, and modeling.",approxSize:"80 GB"})),i={marginTop:"25px",marginBottom:"25px",boxShadow:"5px 5px 15px 5px rgba(0,0,0,0.1)",border:"none",paddingLeft:"50px",paddingRight:"50px",backgroundColor:"rgb(255,254,254)"};return this.state.width<this.state.height&&(i={margin:"0px",border:"none",borderRadius:"0px",padding:"0px"}),r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(u.a,null,r.a.createElement(g.a,{style:i},r.a.createElement(g.a.Body,null,r.a.createElement(p.a,{className:"text-center title-font",style:{padding:"40px"}},e.state.width>e.state.height?r.a.createElement("h1",null,"Pit Photogrammetry: A Terrestrial Dataset"):e.state.width>768?r.a.createElement("h3",null,"Pit Photogrammetry: A Terrestrial Dataset"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Pit Photogrammetry"),r.a.createElement("h5",null,"A Terrestrial Dataset"))),r.a.createElement("hr",null),r.a.createElement(E.a,{horizontal:this.state.width>this.state.height,className:"text-center"},function(){var a=function(e,a){return r.a.createElement(E.a.Item,{className:"author-name",key:a},r.a.createElement("h5",null,e.name),r.a.createElement("p",{className:"text-muted"},e.email.join("@")))},n=Math.floor(t.length/2);return e.state.width<=1024&&e.state.width>425?r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(u.a,null,t.slice(0,n+1).map(a)),r.a.createElement(u.a,null,t.slice(n+1).map(a)))):t.map(a)}()),r.a.createElement("hr",{style:{marginBottom:"50px"}}),r.a.createElement("h3",{style:{marginBottom:"0px"}},"Abstract"),r.a.createElement("hr",{style:{marginTop:"5px"}}),r.a.createElement("div",{className:"text-justify"},r.a.createElement("p",{style:{marginBottom:"75px"}},"This work presents a LIDAR and image dataset for studying steep-walled planetary pits. A custom camera gantry captured sets of 1500 images from 27 locations encircling the West Desert Sinkhole at heights and angles relevant for small rover exploration, mapping, and modeling. The combined laser scans provide a dense, precise, textured model of the pit that is useful as ground truth for benchmarking image-derived models and algorithms, for developing and evaluating robot planning, and as a standalone data source for studying planetary pits. All images and laser scans are localized within a single coordinate frame using a survey instrument and are publicly available online. This paper describes the collection apparatus and procedures used to create the dataset, the organization of the dataset, and anticipated applications for the dataset.")),r.a.createElement("h3",{style:{marginBottom:"0px"}},"Downloads"),r.a.createElement("hr",{style:{marginTop:"5px"}}),e.state.width<=425?r.a.createElement("div",{className:"card-deck-mobile"},n):e.state.width<=768?r.a.createElement(x.a,{className:"card-deck-tablet"},n):r.a.createElement(x.a,null,n),r.a.createElement("h3",{style:{marginTop:"75px",marginBottom:"0px"}},"Evaluation"),r.a.createElement("hr",{style:{marginTop:"5px"}}),r.a.createElement("p",{style:{marginBottom:"25px"}},"The combined laser scans provide a dense, precise, textured model of the pit that is useful as ground truth for benchmarking image-derived models and algorithms, for developing and evaluating robot planning, and as a standalone data source for studying planetary pits."),r.a.createElement(p.a,{style:{fontFamily:"monospace",padding:0}},r.a.createElement(y.a,{text:v,language:"python",showLineNumbers:!1,theme:a,wrapLines:!0})),r.a.createElement("p",{style:{marginTop:"25px",marginBottom:"25px"}},"The combined laser scans provide a dense, precise, textured model of the pit that is useful as ground truth for benchmarking image-derived models and algorithms, for developing and evaluating robot planning, and as a standalone data source for studying planetary pits."),r.a.createElement(p.a,{style:{fontFamily:"monospace",padding:0}},r.a.createElement(y.a,{text:v,language:"python",showLineNumbers:!1,theme:a})),r.a.createElement("h3",{style:{marginTop:"75px",marginBottom:"0px"}},"Bibtex"),r.a.createElement("hr",{style:{marginTop:"5px"}}),r.a.createElement(p.a,{style:{fontFamily:"monospace",padding:0}},r.a.createElement(y.a,{text:w,language:"python",showLineNumbers:!1,theme:a})),r.a.createElement("br",null))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(68);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,152,153]]]);
//# sourceMappingURL=main.020f9579.chunk.js.map