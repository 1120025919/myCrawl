var TableElement = function () {
    var oTableElement = new Object();
    //初始化Table
    oTableElement.Init = function () {
        $('#t_element').bootstrapTable({
            url: '/crawl/element/getElementPage',         //请求后台的URL（*）
            queryParams:oTableElement.queryParams,
            method: 'get',                      //请求方式（*）
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [5,10, 25, 50, 100],        //可供选择的每页的行数（*）
            contentType: "application/x-www-form-urlencoded",
            height:270,
            singleSelect:true,
            showColumns: false,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            clickToSelect: true,                //是否启用点击选中行
            uniqueId: "elementid",                     //每一行的唯一标识，一般为主键列
            showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            idField:'elementid',
            columns: [
                { field: 'elementid',  title: 'ID', visible: false   }
                ,{ field: 'planid',  title: 'planid',  visible: false   }
                ,{ field: 'elementname', title: '目标名称' ,halign:'center', width:'15%' }
                ,{ field: 'elementcode', title: '英文代码' ,halign:'center', width:'15%' }
                ,{ field: 'elementdesc', title: '目标描述' ,halign:'center', width:'20%' }
                ,{ field: 'target', title: '抓取规则' ,halign:'center', width:'15%' }
                ,{ field: 'lastestdays', title: '抓取天数',halign:'center', align:'center', width:'10%' }
                ,{ field: 'createtime', title: '创建时间',halign:'center', align:'center', width:'10%' }
                ,{ field: 'testurl', title: '测试url',  visible: false }
            ]
        });
    };
    oTableElement.queryParams = function(params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit : params.limit
            ,offset : params.offset
            ,planid: $("#planid").val()
        };
        return temp;
    };
    return oTableElement;
};
