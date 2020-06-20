(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(166)),l={id:"concepts",title:"Terminology and Concepts",sidebar_label:"Terminology and Concepts"},o={id:"notes/concepts",title:"Terminology and Concepts",description:"[Outdated] A new version of this will be uploaded soon",source:"@site/docs/notes/concepts.md",permalink:"/docs/notes/concepts",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/notes/concepts.md",lastUpdatedBy:"David Szabo",lastUpdatedAt:1592620862,sidebar_label:"Terminology and Concepts",sidebar:"docs",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/getting_started/faqs"},next:{title:"MMF's Configuration System",permalink:"/docs/notes/configuration"}},b=[{value:"Tasks and Datasets",id:"tasks-and-datasets",children:[]},{value:"Models",id:"models",children:[]},{value:"Registry",id:"registry",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Processors",id:"processors",children:[]},{value:"Sample List",id:"sample-list",children:[]}],c={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"[Outdated]")," A new version of this will be uploaded soon"),Object(i.b)("p",null,"To develop on top of MMF, it is necessary to understand concepts and terminology used in MMF codebase. MMF has been very carefully designed from ground-up to be a multi-tasking framework. This means using MMF you can train on multiple datasets/datasets together."),Object(i.b)("p",null,"To achieve this, MMF has few opinions about architecture of your research project. But, being generic means MMF abstracts a lot of concepts in its modules and it would be easy to develop on top of MMF once a developer understands these simple concepts. Major concepts and terminology in MMF that one needs to know in order to develop over MMF are as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#tasks-and-datasets"}),"Tasks and Datasets")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#models"}),"Models")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#registry"}),"Registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#configuration"}),"Configuration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#processors"}),"Processors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#sample-list"}),"Sample List"))),Object(i.b)("h2",{id:"tasks-and-datasets"},"Tasks and Datasets"),Object(i.b)("p",null,"In MMF, we have divided datasets into a set category of tasks. Thus, a task corresponds to a collection of datasets that belong to it. For example, VQA 2.0, VizWiz and TextVQA all belong VQA task. Each task and dataset has been assigned a unique key which is used to refer it in the command line arguments."),Object(i.b)("p",null,"Following table shows the tasks and their datasets:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Datasets")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VQA"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VQA2.0, VizWiz, TextVQA, VisualGenome, CLEVR")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dialog"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dialog"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VisualDialog")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Caption"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"captioning"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS COCO")))),Object(i.b)("p",null,"Following table shows the inverse of the above table, datasets along with their tasks and keys:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Datasets"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Notes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VQA 2.0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextVQA"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"textvqa"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VizWiz"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vizwiz"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VisualDialog"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visdial"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dialog"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Coming soon!")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VisualGenome"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visual_genome"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CLEVR"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clevr"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS COCO"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coco"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"captioning"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h2",{id:"models"},"Models"),Object(i.b)("p",null,"Reference implementations for state-of-the-art models have been included to act as a base for reproduction of research papers and starting point of new research. MMF has been used in past for following papers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1904.08920"}),"Towards VQA Models That Can Read (LoRRA model)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1807.09956"}),"VQA 2018 Challenge winner")),Object(i.b)("li",{parentName:"ul"},"VizWiz 2018 Challenge winner")),Object(i.b)("p",null,"Similar to tasks and datasets, each model has been registered with a unique key for easy reference in configuration and command line arguments. Following table shows each model's key name and datasets it can be run on."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Model"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Datasets")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LoRRA"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lorra"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2, textvqa, vizwiz")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pythia"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pythia"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"textvqa, vizwiz, vqa2, visual_genome")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BAN"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ban"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"textvqa, vizwiz, vqa2")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BUTD"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"butd"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coco")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CNN LSTM"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cnn_lstm"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clevr")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"BAN support is preliminary and hasn't been properly fine-tuned yet."))),Object(i.b)("h2",{id:"registry"},"Registry"),Object(i.b)("p",null,"Registry acts as a central source of truth for MMF. Inspired from Redux's global store, useful information needed by MMF ecosystem is registered in the ",Object(i.b)("inlineCode",{parentName:"p"},"registry"),". Registry can be considered as a general purpose storage for information which is needed by multiple parts of the framework and acts source of information wherever that information is needed."),Object(i.b)("p",null,"Registry also registers models, tasks, datasets etc. based on a unique key as mentioned above. Registry's functions can be used as decorators over the classes which need to be registered (for e.g. models etc.)"),Object(i.b)("p",null,"Registry object can be imported as the follow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"from mmf.common.registry import registry\n\n")),Object(i.b)("p",null,"Find more details about Registry class in its documentation ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../lib/common/registry"}),"common/registry"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"As is necessary with research, most of the parameters/settings in MMF are configurable. MMF specific default values (",Object(i.b)("inlineCode",{parentName:"p"},"training"),") are present in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/mmf/blob/v0.3/mmf/common/defaults/configs/base.yaml"}),"mmf/common/defaults/configs/base.yaml")," with detailed comments delineating the usage of each parameter."),Object(i.b)("p",null,"For ease of usage and modularity, configuration for each dataset is kept separately in ",Object(i.b)("inlineCode",{parentName:"p"},"mmf/common/defaults/configs/datasets/[task]/[dataset].yaml")," where you can get ",Object(i.b)("inlineCode",{parentName:"p"},"[task]")," value for the dataset from the tables in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#tasks-and-datasets"}),"Tasks and Datasets")," section."),Object(i.b)("p",null,"The most dynamic part, model configuration are also kept separate and are the one which need to be defined by the user if they are creating their own models. We include configurations for the models included in the model zoo of MMF. For each model, there is a separate configuration for each dataset it can work on. See an example in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/mmf/blob/v0.3/configs/vqa/vqa2/pythia.yaml"}),"configs/vqa/vqa2/pythia.yaml"),". The configuration in the configs folder are divided using the scheme ",Object(i.b)("inlineCode",{parentName:"p"},"configs/[task]/[dataset]/[model].yaml"),"."),Object(i.b)("p",null,"It is possible to include other configs into your config using ",Object(i.b)("inlineCode",{parentName:"p"},"includes")," directive. Thus, in MMF config above you can include ",Object(i.b)("inlineCode",{parentName:"p"},"vqa2"),"'s config like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"includes:\n- common/defaults/configs/datasets/vqa/vqa2.yaml\n")),Object(i.b)("p",null,"Now, due to separate config per dataset this concept can be extended to do multi-tasking and include multiple dataset configs here."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"base.yaml")," file mentioned above is always included and provides sane defaults for most of the training parameters. You can then specify the config of the model that you want to train using ",Object(i.b)("inlineCode",{parentName:"p"},"--config [config_path]")," option. The final config can be retrieved using ",Object(i.b)("inlineCode",{parentName:"p"},"registry.get('config')")," anywhere in your codebase. You can access the attributes from these configs by using ",Object(i.b)("inlineCode",{parentName:"p"},"dot")," notation. For e.g. if you want to get the value of maximum iterations, you can get that by ",Object(i.b)("inlineCode",{parentName:"p"},"registry.get('config').training.max_updates"),"."),Object(i.b)("p",null,"The values in the configuration can be overriden using two formats:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Individual Override: For e.g. you want to use ",Object(i.b)("inlineCode",{parentName:"li"},"DataParallel")," to train on multiple GPUs, you can override the default value of ",Object(i.b)("inlineCode",{parentName:"li"},"False")," by passing arguments ",Object(i.b)("inlineCode",{parentName:"li"},"training.data_parallel True")," at the end your command. This will override that option on the fly."),Object(i.b)("li",{parentName:"ul"},"DemJSON based override: The above option gets clunky when you are trying to run the hyperparameters sweeps over model parameters. To avoid this, you can update a whole block using a demjson string. For e.g. to use early stopping as well update the patience, you can pass ",Object(i.b)("inlineCode",{parentName:"li"},'--config_override "{training: {should_early_stop: True, patience: 5000}}"'),". This demjson string is easier to generate programmatically than the individual override.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is always helpful to verify your config overrides and final configuration values that are printed to make sure you override the correct keys."))),Object(i.b)("h2",{id:"processors"},"Processors"),Object(i.b)("p",null,"The main aim of processors is to keep data processing pipelines as similar as possible for different datasets and allow code reusability. Processors take in a dict with keys corresponding to data they need and return back a dict with processed data. This helps keep processors independent of the rest of the logic by fixing the signatures they require. Processors are used in all of the datasets to hand off the data processing needs. Learn more about processors in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../lib/datasets/processors"}),"documentation for processors"),"."),Object(i.b)("h2",{id:"sample-list"},"Sample List"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../lib/datasets/sample#mmf.common.sample.SampleList"}),"SampleList")," has been inspired from BBoxList in maskrcnn-benchmark, but is more generic. All datasets integrated with MMF need to return a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../lib/datasets/sample#mmf.common.sample.Sample"}),"Sample")," which will be collated into ",Object(i.b)("inlineCode",{parentName:"p"},"SampleList"),". Now, ",Object(i.b)("inlineCode",{parentName:"p"},"SampleList")," comes with a lot of handy functions which enable easy batching and access of things. For e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Sample")," is a dict with some keys. In ",Object(i.b)("inlineCode",{parentName:"p"},"SampleList"),", values for these keys will be smartly clubbed based on whether it is a tensor or a list and assigned back to that dict. So, end user gets these keys clubbed nicely together and can use them in their model. Models integrated with Pythia receive a ",Object(i.b)("inlineCode",{parentName:"p"},"SampleList")," as an argument which again makes the trainer unopinionated about the models as well as the datasets. Learn more about ",Object(i.b)("inlineCode",{parentName:"p"},"Sample")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SampleList")," in their ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../lib/common/sample"}),"documentation"),"."))}s.isMDXComponent=!0},166:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?r.a.createElement(u,o(o({ref:t},c),{},{components:a})):r.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);