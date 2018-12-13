import XLSX from 'xlsx';
export default {
    handlejsontosheet(jsonData,fileName){
     let wsName = "ecat"
     let wb = XLSX.utils.book_new();
     let ws = XLSX.utils.json_to_sheet(jsonData);

     XLSX.utils.book_append_sheet(wb,ws,wsName);
     XLSX.writeFile(wb,fileName);
    },
    formatYearMonthToDate(date, fmt) {
        if (date == null) return;
        date = new Date(date);
        return this.formatDate(date, fmt);
    },
    getDateRangeByMonth(date, fmt) {
        if (date == null) return null;
        let startDate = new Date(date);
        let endDate = new Date(date);
        endDate.setMonth(endDate.getMonth() + 1);
        let dateRange = {
            startDate: this.formatDate(startDate, fmt),
            endDate: this.formatDate(endDate, fmt)
        };
        return dateRange;
    },
    formatDate(date, fmt) {
        if (date == null) return;
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    getLast12Months() {
        let curDate = new Date();
        var result = [];
        curDate.setDate(1);
        let year = curDate.getFullYear();
        let curMonth = curDate.getMonth() + 1;
        for (var i = 0; i < 12; i++) {
            if (curMonth <= 0) {
                year = year - 1;
                curMonth = 12;
            }
            if (curMonth < 10) {
                result.push(year + "-0" + curMonth);
            } else {
                result.push(year + "-" + curMonth);
            }
            curMonth--;
        }
        return result;
    },
    /**
     * 获取对应角色的供应商
     * @param commoditySettings
     * @returns {Array}
     */
    getUserSupportedSuppliers(commoditySettings,role) {
        let userSupportedSuppliers = [];
        commoditySettings.forEach(function (commodity) {
            commodity.suppliers.forEach(function (supplier) {
                if (supplier.access === role) {
                    userSupportedSuppliers.push(supplier);
                }
            });
        });
        return userSupportedSuppliers;
    },
    /**
    * 获取用户的profile 供应商列表
     */
    getUserSupportedProfile(commoditySettings) {
        let userSupportedSuppliers = [];
        commoditySettings.forEach(function (commodity) {
            commodity.suppliers.forEach(function (supplier) {
                    userSupportedSuppliers.push(supplier);
            });
        });
        return userSupportedSuppliers;
    },

    /**
     * 根据commodityName 获取用户的profile 供应商列表
     */
    getUserSupportedProfileByCommodityName(commoditySettings,commodityName) {
        let userSupportedSuppliers = [];
        commoditySettings.forEach(function (commodity) {
            commodity.suppliers.forEach(function (supplier) {
                if(commodityName == commodity.commodityName)
                userSupportedSuppliers.push(supplier);
            });
        });
        return userSupportedSuppliers;
    },


    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    },
    showFullScreenLoading() {
        var fullScreenLoading = document.getElementById("theFullScreenLoading");
        fullScreenLoading.style.display = '';
    },
    hideFullScreenLoading() {
        var fullScreenLoading = document.getElementById("theFullScreenLoading");
        if (fullScreenLoading !== null) {
            fullScreenLoading.style.display = 'none';
        }
    }
}