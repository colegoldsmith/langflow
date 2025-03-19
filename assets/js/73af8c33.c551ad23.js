"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5673],{28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}},63094:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"type":"api","id":"get-list-of-components-liked-by-user","title":"Get List Of Components Liked By User","description":"","slug":"/get-list-of-components-liked-by-user","frontMatter":{},"api":{"tags":["Components Store"],"operationId":"get_list_of_components_liked_by_user_api_v1_store_users_likes_get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"properties":{"likes_count":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Likes Count"},"liked_by_user":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Liked By User"}},"type":"object","required":["likes_count","liked_by_user"],"title":"UsersLikesResponse"},"type":"array","title":"Response Get List Of Components Liked By User Api V1 Store Users Likes Get"}}}}},"security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"description":"Get List Of Components Liked By User","method":"get","path":"/api/v1/store/users/likes","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.2.0"},"postman":{"name":"Get List Of Components Liked By User","description":{"type":"text/plain"},"url":{"path":["api","v1","store","users","likes"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET","auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/get-list-of-components-liked-by-user","previous":{"title":"Get Tags","permalink":"/api/get-tags"},"next":{"title":"Like Component","permalink":"/api/like-component"}}');var i=s(74848),r=s(28453);const o={},l="Get List Of Components Liked By User",a=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"get-list-of-components-liked-by-user",children:"Get List Of Components Liked By User"})}),"\n",(0,i.jsx)(t.p,{children:"Get List Of Components Liked By User"}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"likes_count"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Likes Count"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"liked_by_user"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Liked By User"})]})})]})})]})})})]})})]})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);