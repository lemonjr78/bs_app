
app.controller('AddNewController', function($scope) {

    /*used for reverse (two ways binding)*/
    // $scope.hiradict_r ={};
    // for (var key in  $scope.hiradict) {
    //     if ( $scope.hiradict.hasOwnProperty(key)) {
    //          $scope.hiradict_r[ $scope.hiradict[key]] = key;
    //     }
    // }
    
    //  private String version2 = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろわをんがぐぎげござじずぜぞだぢづでどばびぶぼべぼぱぴぷぺぽゆよ";
    
    var hiradict = {
        'a' : 'あ',
        'i' : 'い',
        'u' : 'う',
        'e' : 'え',
        'o' : 'お',

        'ka' : 'か',
        'ki' : 'き',
        'ku' : 'く',
        'ke' : 'け',
        'ko' : 'こ',

        'sa' : 'さ',
        'shi' : 'し',
        'su' : 'す',
        'se' : 'せ',
        'so' : 'そ',

        'ta' : 'た',
        'chi' : 'ち',
        'tsu' : 'つ',
        'te' : 'て',
        'to' : 'と',

        'na' : 'な',
        'ni' : 'に',
        'nu' : 'ぬ',
        'ne' : 'ね',
        'no' : 'の',

        'ha' : 'ま',
        'hi' : 'み',
        'fu' : 'む',
        'he' : 'め',
        'ho' : 'も',

        'ma' : 'は',
        'mi' : 'は',
        'mu' : 'は',
        'me' : 'は',
        'mo' : 'は',

        'ra' : 'ら',
        'ri' : 'り',
        'ru' : 'る',
        're' : 'れ',
        'ro' : 'ろ',

        'wa' : 'わ',
        'wo' : 'を',
        'n' : 'ん',

        'ga' : 'が',
        'gi' : 'ぎ',
        'gu' : 'ぐ',
        'ge' : 'げ',
        'go' : 'ご',

        'za' : 'ざ',
        'ji' : 'じ',
        'zu' : 'ず',
        'ze' : 'ぜ',
        'zo' : 'ぞ',

        'da' : 'だ',
        'ji' : 'ぢ',
        'dzu' : 'づ',
        'de' : 'で',
        'do' : 'ど',

        'ba' : 'ば',
        'bi' : 'び',
        'bu' : 'ぶ',
        'be' : 'べ',
        'bo' : 'ぼ',

        'pa' : 'ぱ',
        'pi' : 'ぴ',
        'pu' : 'ぷ',
        'pe' : 'ぺ',
        'po' : 'ぽ',

        'ya' : 'や',
        'yu' : 'ゆ',
        'yo' : 'よ',

        'kya' : 'かゃ',
        'kyu' : 'くゅ',
        'kyo' : 'こょ',

    };
    
    function getValid( word )
    {
        if(typeof word =='undefined')
            return '*';
        return word;
    }

    $scope.generating = function(){
        var splitted = $scope.formAddNew.inputWi.split(" ");
        var result = ''
        console.log(angular.toJson(splitted, true));

        angular.forEach(splitted, function(value){
            // console.log('res : ' + value );
            var curr = hiradict[value];
            if(typeof curr =='undefined')
                curr =  '*';
            result += curr + ' ';
        });

        $scope.inputWh = result;
    };


    $scope.generating2 = function(){
        console.log($scope.formAddNew.inputWi);
        $scope.inputWh = $scope.formAddNew.inputWi;
    };

});
