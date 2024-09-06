(()=>{"use strict";const e=window.wp.blocks,l=window.wp.i18n,t=window.wp.blockEditor,r=window.wp.components,o=window.wp.data,s=window.ReactJSXRuntime,i=JSON.parse('{"UU":"query-filter/post-type"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i,context:n}){const{emptyLabel:a,label:p,showLabel:c}=e,u=(0,o.useSelect)((e=>(e("core").getPostTypes({per_page:100})||[]).filter((e=>e.viewable))||[]),[]);let y=(n.query.postType||"").split(",").map((e=>e.trim()));Array.isArray(n.query.multiple_posts)&&(y=y.concat(n.query.multiple_posts));const _=y.map((e=>u.find((l=>l.slug===e))||{slug:e,name:e}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.InspectorControls,{children:(0,s.jsxs)(r.PanelBody,{title:(0,l.__)("Post Type Settings","query-filter"),children:[(0,s.jsx)(r.TextControl,{label:(0,l.__)("Label","query-filter"),value:p,defaultValue:(0,l.__)("Content Type","query-filter"),help:(0,l.__)("If empty then no label will be shown","query-filter"),onChange:e=>i({label:e})}),(0,s.jsx)(r.ToggleControl,{label:(0,l.__)("Show Label","query-filter"),checked:c,onChange:e=>i({showLabel:e})}),(0,s.jsx)(r.TextControl,{label:(0,l.__)("Empty Choice Label","query-filter"),value:a,placeholder:(0,l.__)("All","query-filter"),onChange:e=>i({emptyLabel:e})})]})}),(0,s.jsxs)("div",{...(0,t.useBlockProps)({className:"wp-block-query-filter"}),children:[c&&(0,s.jsx)("label",{className:"wp-block-query-filter-post-type__label wp-block-query-filter__label",children:p||(0,l.__)("Content Type","query-filter")}),(0,s.jsxs)("select",{className:"wp-block-query-filter-post-type__select wp-block-query-filter__select",inert:!0,children:[(0,s.jsx)("option",{children:a||(0,l.__)("All","query-filter")}),_.map((e=>(0,s.jsx)("option",{children:e.name},e.slug)))]})]})]})}})})();