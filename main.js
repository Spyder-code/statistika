var game = {
    data:[],
    count:0,
    total:0,
    mean:0,
    median:0,
    modus:0,
    start:()=>{  
        $('#hitung').hide();
        $('#reset').hide();
        $('#submit').click(function () {
            $('#start').hide();
            var a = $('#count').val();
            game.count = a;
            $('#data').append('<h1 style="font-size: 20pt; font-weight: bold;">Isi semua data</h1>');
            for (let i = 0; i < a; i++) {
                $('#data').append('<input type="text" class="text-center h-10 my-2" style="width: 300px;" id="'+i+'"><br>');
            }
            game.hitung()
        });
    },
    hitung:()=> {  
        $('#hitung').show();
        $('#reset').show();
            $('#hitung').click(function () { 
                game.hitungMean();
                game.hitungMedian();
                game.hitungModus();
                game.result();
            });
    },
    hitungMean:()=>{
        for (let i = 0; i < game.count; i++) {
            var b = $('#'+i).val();
            var nilai = parseInt(b);
            game.data.push(nilai);
        }
        for (let i = 0; i < game.data.length; i++) {
            game.total += game.data[i];
        }
        game.mean = game.total/game.data.length;
    },
    hitungMedian:()=>{
        var data = game.data.sort();
        var a = data.length;
        if(a%2==0){
            var satu = (a/2)-1;
            var dua = ((a/2)+1)-1;
            game.median = (data[satu]+data[dua])/2;
        }else{
            var index = (a+1)/2;
            var c = index-1;
            game.median = data[c];
        }
    },
    hitungModus:()=>{
        var data = game.data.sort();
        game.modus = mode(data);
    },
    result:()=>{
        $('#result').append('<p>Mean = '+game.mean+'</p>');
        $('#result').append('<p>Median = '+game.median+'</p>');
        $('#result').append('<p>Modus = '+game.modus+'</p>');
    }
}

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
game.start();
$('#reset').click(function (e) { 
    e.preventDefault();
    window.location.reload();
});
