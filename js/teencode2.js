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
    if (encType === "teencode2") {
        ret = "";
        if (decode) {
                S = S.replace(/ä/g,"a");
    S = S.replace(/ß/g,"b");
    S = S.replace(/¢/g,"c");
    S = S.replace(/\|\)/g,"d");
    S = S.replace(/€/g,"e");
    S = S.replace(/ƒ/g,"f");
    S = S.replace(/\(\¬/g,"g");
    S = S.replace(/\|-\|/g,"h");
    S = S.replace(/ï/g,"i");
    S = S.replace(/ĵ/g,"j");
    S = S.replace(/\|</g,"k");
    S = S.replace(/\|\\\/\|/g,"m");
    S = S.replace(/\|\\\|/g,"n");
    S = S.replace(/ø/g,"o");
    S = S.replace(/ṗ/g,"p");
    S = S.replace(/ºï/g,"q");
    S = S.replace(/®/g,"r");
    S = S.replace(/§/g,"s");
    S = S.replace(/†/g,"t");
    S = S.replace(/ü/g,"u");
    S = S.replace(/ṽ/g,"v");
    S = S.replace(/ψ/g,"w");
    S = S.replace(/×/g,"x");
    S = S.replace(/¥/g,"y");
    S = S.replace(/Ž/g,"z");
            ret = S;
        } else {
    S = S.replace(/a/g,"ä");
    S = S.replace(/b/g,"ß");
    S = S.replace(/c/g,"¢");
    S = S.replace(/d/g,"|)");
    S = S.replace(/e/g,"€");
    S = S.replace(/f/g,"ƒ");
    S = S.replace(/g/g,"(¬");
    S = S.replace(/h/g,"|-|");
    S = S.replace(/i/g,"ï");
    S = S.replace(/j/g,"ĵ");
    S = S.replace(/k/g,"|<");
    S = S.replace(/m/g,"|\\/|");
    S = S.replace(/n/g,"|\\|");
    S = S.replace(/o/g,"ø");
    S = S.replace(/p/g,"ṗ");
    S = S.replace(/q/g,"ºï");
    S = S.replace(/r/g,"®");
    S = S.replace(/s/g,"§");
    S = S.replace(/t/g,"†");
    S = S.replace(/u/g,"ü");
    S = S.replace(/v/g,"ṽ");
    S = S.replace(/w/g,"ψ");
    S = S.replace(/x/g,"×");
    S = S.replace(/y/g,"¥");
    S = S.replace(/z/g,"Ž");
            ret = S;
        }
    }
    console.log(ret);
    callback(ret);
}
