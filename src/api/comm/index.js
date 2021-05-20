
export function DocsType(){
    const types = [{
        name: 'vue相关',
        code: '01'
    },{
        name: 'vue插件相关',
        code: '02'
    },{
        name: 'git相关',
        code: '11'
    }]
    return new Promise((resolve,reject)=>{
        resolve(types);
    })
}
