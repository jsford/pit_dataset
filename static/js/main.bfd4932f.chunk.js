(this.webpackJsonppit_dataset=this.webpackJsonppit_dataset||[]).push([[0],{45:function(e,t,a){e.exports=a(69)},50:function(e,t,a){},51:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),l=(a(50),a(20)),s=a(27),m=a(28),d=a(35),c=a(36),p=a(12),h=a(32),u=a(23),g=(a(51),a(11)),f=a(42),y=a(34),E=a(33),b=a(24),x="\n\n@article{\n  FORD2019,\n  author = {Jordan Ford and Patrick Callaghan and Uland Wong \n  and Heather Jones and Warren Whittaker and Red Whittaker},\n  title = {Image and Lidar Dataset of the West Desert Sinkhole: \n  An Analog for Steep-Walled Planetary Pits},\n  conference = {Planetary Pits and Caves Conference},\n  year = {2019},\n}\n\n".trim(),w='  \n\nimport point_cloud_utils as pcu\nimport numpy as np\n\n# numpy array containing downloaded lidar point cloud\na = np.loadtxt("path/to/lidar")\n\n# numpy array containing photogrammetry dense point cloud\nb = np.loadtxt("path/to/photogrammetry")\n\n# dists_a_to_b is of shape (a.shape[0],) and contains the shortest squared distance \n# between each point in a and the points in b\n# corrs_a_to_b is of shape (a.shape[0],) and contains the index into b of the \n# closest point for each point in a\ndists_a_to_b, corrs_a_to_b = pcu.point_cloud_distance(a, b)\n\n# Compute each one sided squared Hausdorff distances\nhausdorff_a_to_b = pcu.hausdorff(a, b)\nhausdorff_b_to_a = pcu.hausdorff(b, a)\n\n# Print evaluation results\nprint("Hausdorff distance from LiDAR to Photogrammetry: {}".format(hausdorff_a_to_b))\nprint("Hausdorff distance from Photogrammetry to LiDAR: {}".format(hausdorff_b_to_a))\n\n\n'.trim(),v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(g.a.Img,{variant:"top",src:this.props.imgSrc}),r.a.createElement(g.a.Body,{className:"text-center"},r.a.createElement("br",null),r.a.createElement("h4",null,this.props.title),r.a.createElement("br",null),r.a.createElement(p.a,{className:"text-center"},r.a.createElement(g.a.Text,{style:{fontSize:"15px",lineHeight:"20px"}},this.props.text))),r.a.createElement(g.a.Footer,{className:"text-center download-card-footer"},r.a.createElement(f.a,{variant:"primary"},"Download"),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},"approx. ",this.props.approxSize)))}}]),a}(r.a.Component),_=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(l.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,t=b.b,a=[{name:"Jordan Ford",email:["jsford","andrew.cmu.edu"]},{name:"Khaled Sharif",email:["khaled.sharif","nasa.gov"]},{name:"Uland Wong",email:["uland.wong","nasa.gov"]},{name:"William Whittaker",email:["red","cmu.edu"]},{name:"Warren Whittaker",email:["warrenw","andrew.cmu.edu"]},{name:"Heather Jones",email:["hjones","andrew.cmu.edu"]},{name:"Patrick Callaghan",email:["pac130","pitt.edu"]}],n=r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{imgSrc:"paper.jpg",title:"Paper",text:"This paper describes the collection apparatus and procedures used to create the dataset, the organization of the dataset, and anticipated applications for the dataset.",approxSize:"2 MB"}),r.a.createElement(v,{imgSrc:"lidar.png",title:"LiDAR",text:"Combined laser scans provide a dense, precise, textured model of the pit that is useful as ground truth for benchmarking image-derived models and algorithms, for developing and evaluating robot planning, and as a standalone data source for studying planetary pits.",approxSize:"10 GB"}),r.a.createElement(v,{imgSrc:"images.jpg",title:"Images",text:"Custom camera gantry captured sets of 1500 images from 27 locations encircling the West Desert Sinkhole at heights and angles relevant for small rover exploration, mapping, and modeling.",approxSize:"80 GB"})),o={marginTop:"25px",marginBottom:"25px",boxShadow:"5px 5px 15px 5px rgba(0,0,0,0.1)",border:"none",paddingLeft:"50px",paddingRight:"50px",backgroundColor:"rgb(255,254,254)"};return this.state.width<this.state.height&&(o={margin:"0px",border:"none",borderRadius:"0px",padding:"0px"}),r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(u.a,null,r.a.createElement(g.a,{style:o},r.a.createElement(g.a.Body,null,r.a.createElement(p.a,{className:"text-center title-font",style:{padding:"40px"}},e.state.width>e.state.height?r.a.createElement("h1",null,"Pit Photogrammetry: A Terrestrial Dataset"):e.state.width>768?r.a.createElement("h3",null,"Pit Photogrammetry: A Terrestrial Dataset"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Pit Photogrammetry"),r.a.createElement("h5",null,"A Terrestrial Dataset"))),r.a.createElement("hr",null),r.a.createElement(y.a,{horizontal:this.state.width>this.state.height,className:"text-center"},function(){var t=function(e,t){return r.a.createElement(y.a.Item,{className:"author-name",key:t},r.a.createElement("h5",null,e.name),r.a.createElement("p",{className:"text-muted"},e.email.join("@")))},n=Math.floor(a.length/2);return e.state.width<=1024&&e.state.width>425?r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(u.a,null,a.slice(0,n+1).map(t)),r.a.createElement(u.a,null,a.slice(n+1).map(t)))):a.map(t)}()),r.a.createElement("hr",{style:{marginBottom:"50px"}}),r.a.createElement("h3",{style:{marginBottom:"0px"}},"Abstract"),r.a.createElement("hr",{style:{marginTop:"5px"}}),r.a.createElement("div",{className:"text-justify"},r.a.createElement("p",{style:{marginBottom:"75px"}},"This work presents a LIDAR and image dataset for studying steep-walled planetary pits. A custom camera gantry captured sets of 1500 images from 27 locations encircling the West Desert Sinkhole at heights and angles relevant for small rover exploration, mapping, and modeling. The combined laser scans provide a dense, precise, textured model of the pit that is useful as ground truth for benchmarking image-derived models and algorithms, for developing and evaluating robot planning, and as a standalone data source for studying planetary pits. All images and laser scans are localized within a single coordinate frame using a survey instrument and are publicly available online. This paper describes the collection apparatus and procedures used to create the dataset, the organization of the dataset, and anticipated applications for the dataset.")),r.a.createElement("h3",{style:{marginBottom:"0px"}},"Downloads"),r.a.createElement("hr",{style:{marginTop:"5px"}}),e.state.width<=425?r.a.createElement("div",{className:"card-deck-mobile"},n):e.state.width<=768?r.a.createElement(E.a,{className:"card-deck-tablet"},n):r.a.createElement(E.a,null,n),r.a.createElement("h3",{style:{marginTop:"75px",marginBottom:"0px"}},"Evaluation"),r.a.createElement("hr",{style:{marginTop:"5px"}}),r.a.createElement("p",{style:{marginBottom:"25px"}},"In order to evaluate the quality of a photogrammetry reconstruction, you can compare the photogrammetry dense point cloud with the LiDAR ground truth point cloud. One way to compare these two point clouds is by computing one sided squared Hausdorff distances. Below is a sample Python evaluation script that you can use. The script depends on",r.a.createElement("a",{href:"https://numpy.org"},"Numpy")," and",r.a.createElement("a",{href:"https://github.com/fwilliams/point-cloud-utils"},"Point Cloud Utils.")),r.a.createElement(p.a,{style:{fontFamily:"monospace",padding:0}},r.a.createElement(b.a,{text:w,language:"python",showLineNumbers:!1,theme:t,wrapLines:!0})),r.a.createElement("h3",{style:{marginTop:"75px",marginBottom:"0px"}},"Bibtex"),r.a.createElement("hr",{style:{marginTop:"5px"}}),r.a.createElement(p.a,{style:{fontFamily:"monospace",padding:0}},r.a.createElement(b.a,{text:x,language:"python",showLineNumbers:!1,theme:t})),r.a.createElement("br",null))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,152,153]]]);
//# sourceMappingURL=main.bfd4932f.chunk.js.map