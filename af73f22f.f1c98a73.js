(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),i=(n(0),n(166)),l={id:"vqa_challenge",title:"VQA Challenge",sidebar_label:"VQA Challenge"},o={id:"challenges/vqa_challenge",title:"VQA Challenge",description:"VQA Challenge is available at this link.",source:"@site/docs/challenges/vqa_challenge.md",permalink:"/docs/challenges/vqa_challenge",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/challenges/vqa_challenge.md",lastUpdatedBy:"David Szabo",lastUpdatedAt:1592620862,sidebar_label:"VQA Challenge",sidebar:"docs",previous:{title:"TextVQA Challenge",permalink:"/docs/challenges/textvqa_challenge"},next:{title:"Iterative Answer Prediction with Pointer-Augmented Multimodal Transformers for TextVQA",permalink:"/docs/projects/m4c"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Training and Evaluation",id:"training-and-evaluation",children:[{value:"Training",id:"training",children:[]},{value:"Evaluation",id:"evaluation",children:[]}]},{value:"Predictions for Challenge",id:"predictions-for-challenge",children:[]},{value:"Submission for Challenge",id:"submission-for-challenge",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"VQA Challenge is available at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://visualqa.org/challenge.html"}),"this link"),"."),Object(i.b)("p",null,"In MMF, we provide the starter code for various baseline models for this challenge. VQA2.0 dataset will also be automatically downloaded during first training."),Object(i.b)("p",null,"In this tutorial, we provide steps for running training and evaluation with VisualBERT model on VQA2.0 dataset and generating submission file for the challenge. The same steps can be used for other models."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Follow the prerequisites for installation of mmf ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mmf.sh/docs/getting_started/installation"}),"here"),"."),Object(i.b)("h2",{id:"training-and-evaluation"},"Training and Evaluation"),Object(i.b)("h3",{id:"training"},"Training"),Object(i.b)("p",null,"For running training on train set, run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run config=projects/visual_bert/configs/vqa2/defaults.yaml \\\n    model=visual_bert \\\n    dataset=vqa2 \\\n    run_type=train\n")),Object(i.b)("p",null,"This will train the ",Object(i.b)("inlineCode",{parentName:"p"},"visual_bert")," model on the dataset and generate the checkpoints and best trained model (",Object(i.b)("inlineCode",{parentName:"p"},"visual_bert_final.pth"),") will be stored in an experiment folder under the ",Object(i.b)("inlineCode",{parentName:"p"},"./save")," directory by default."),Object(i.b)("h3",{id:"evaluation"},"Evaluation"),Object(i.b)("p",null,"Next run evaluation on the validation set:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run config=projects/visual_bert/configs/vqa2/defaults.yaml \\\n    model=visual_bert \\\n    dataset=vqa2 \\\n    run_type=val \\\n    checkpoint.resume_file=<path_to_trained_model>\n")),Object(i.b)("p",null,"This will give you the performance of your model on the validation set. The metric will be VQA Accuracy."),Object(i.b)("h2",{id:"predictions-for-challenge"},"Predictions for Challenge"),Object(i.b)("p",null,"After training the model and evaluated on the validation set, we will generate the predictions on the ",Object(i.b)("inlineCode",{parentName:"p"},"test-dev")," and ",Object(i.b)("inlineCode",{parentName:"p"},"test-std")," set. The prediction file should contain the following for each sample:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Question ID, ",Object(i.b)("inlineCode",{parentName:"li"},"question_id")),Object(i.b)("li",{parentName:"ul"},"Answer, ",Object(i.b)("inlineCode",{parentName:"li"},"answer"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "question_id": "INT",\n    "answer": "STRING"\n  },\n  {\n    "question_id": "...",\n    "answer": "..."\n  }\n]\n')),Object(i.b)("p",null,"With MMF you can directly generate the predictions in the required submission format with the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_predict config=projects/visual_bert/configs/vqa2/defaults.yaml \\\n    model=visual_bert \\\n    dataset=vqa2 \\\n    run_type=test \\\n    checkpoint.resume_file=<path_to_trained_model>\n")),Object(i.b)("p",null,"This command will output where the generated predictions JSON file is stored."),Object(i.b)("h2",{id:"submission-for-challenge"},"Submission for Challenge"),Object(i.b)("p",null,"Next you can upload the generated json file to EvalAI page for VQA ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://evalai.cloudcv.org/web/challenges/challenge-page/514/my-submission"}),"here"),". To check your results, you can go in 'My submissions' section and check the phase where you submitted your results file."))}u.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(h,o(o({ref:t},s),{},{components:n})):r.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);