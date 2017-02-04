$(document).ready(function() {
    $('textarea').each(function(i, area) {
        $(area).on('change keyup paste blur focus', function() {
            var enc = $(area).attr("data-id");
            var decode = ($(area).attr("data-type") === "encode") ? 0 : 1
            var S = $(area).val();

            doEncoding(S, enc, decode, function(ret) {
                $("#" + enc + "_output").text(ret);
            });
        })
    });
});

function doEncoding(S, encType, decode, callback) {
    var ret = "Error";
    if (encType === "Skycode2") {
        ret = "";
        if (decode) {
            S = S.replace(/'x /g," ");
            S = S.replace(/'x/g,"");         
            ret = S;
        } else {
        S = S.replace(/ /g,"'x "); if ( S.length != " " ) { S=S+"'x"};
            ret = S;
        }
    }
    console.log(ret);
    callback(ret);
}
function about() { alert("Chương trình bộ gõ skycode\r\nPhiên bản 6.9\r\nTác giả: HellCat\r\nTrang chủ:https://www.facebook.com/hellcat.info"); }