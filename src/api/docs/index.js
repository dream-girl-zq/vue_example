import indexTable from './jsons/indexTable'

/*docs文档index界面的表格数据*/
export function indexTableList(data){
    let rawIndexTable = JSON.parse(JSON.stringify(indexTable));
    let respData = {};
    respData.rows = rawIndexTable;
    respData.total = rawIndexTable.length;
    return new Promise((resolve,reject)=>{
        resolve(respData);
    });
}
