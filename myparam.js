var myimgpanel=[];
var myimgpanel_bg=[];
/////////////用于playerControl.js中的数组开始////////////////
//自动漫游路径
var mydata = [//自动漫游路径
    //x         y      z      angel       time  展板编号  展板初始旋转(单位是90度)
    [-14.14   ,1.5   , 0       ,0         ,200]//初始位置
     ,[-9.14   ,1.5   , 0       ,0         ,200]//拉近镜头
    ,[-9.1    ,1.5   , 4     ,270       ,200]//旋转

     ,[-9.101    ,1.5   , 4     ,270       ,200,52,2]//暂点1,52 lai
     ,[-9.102    ,1.5   , 4     ,270       ,200,51,2]//暂点
     ,[-9.103    ,1.5   , 4     ,270       ,200,50,1]//暂点
     ,[-9.104    ,1.5   , 4     ,270       ,200,49,1]//暂点
     ,[-9.105    ,1.5   , 4     ,270       ,200,48,1]//暂点
     ,[-9.106    ,1.5   , 4     ,270       ,200,47,1]//暂点
     ,[-9.107    ,1.5   , 4     ,270       ,200,46,0]//暂点

     ,[-2   ,1.5   , 4     ,270       ,90]//移动

     ,[-2.001    ,1.5   , 4     ,270       ,200,45,1]//暂点
     ,[-2.002    ,1.5   , 4     ,270       ,200,44,1]//暂点

     ,[6.7     ,1.5   ,3.8      ,270       ,90]//移动

     ,[6.701     ,1.5   ,3.8      ,270       ,90,43,1]//暂点
     ,[6.702     ,1.5   ,3.8      ,270       ,90,42,1]//暂点
     ,[6.703     ,1.5   ,3.8      ,270       ,90,41,1]//暂点
     ,[6.704     ,1.5   ,3.8      ,270       ,90,40,1]//暂点
     ,[6.705     ,1.5   ,3.8      ,270       ,90,39,1]//暂点
     ,[6.706     ,1.5   ,3.8      ,270       ,90,38,1]//暂点
     ,[6.707     ,1.5   ,3.8      ,270       ,90,37,1]//暂点
     ,[6.708     ,1.5   ,3.8      ,270       ,90,36,1]//暂点
     ,[6.709     ,1.5   ,3.8      ,270       ,90,35,1]//暂点
     ,[6.710     ,1.5   ,3.8      ,270       ,90,34,1]//暂点
     ,[6.711     ,1.5   ,3.8      ,270       ,90,33,1]//暂点
     ,[6.712     ,1.5   ,3.8      ,270       ,90,32,1]//暂点
     ,[6.713     ,1.5   ,3.8      ,270       ,90,31,1]//暂点
     ,[6.714     ,1.5   ,3.8      ,270       ,90,30,1]//暂点
     ,[6.715     ,1.5   ,3.8      ,270       ,90,29,1]//暂点
     ,[6.716     ,1.5   ,3.8      ,270       ,90,28,1]//暂点
     ,[6.717     ,1.5   ,3.8      ,270       ,90,27,1]//暂点
     ,[6.718     ,1.5   ,3.8      ,270       ,90,26,1]//暂点
     ,[6.719     ,1.5   ,3.8      ,270       ,90,25,1]//暂点
     ,[6.720     ,1.5   ,3.8      ,270       ,90,24,1]//暂点/**/
    ,[6.721     ,1.5  ,3.8      ,270       ,90,23,1]//暂点


    ,[8.8 ,  1.5 ,  3.28 ,  327,300]//拐角旋转
    ,[8.801 ,  1.5 ,  3.28 ,  327,300,22,0]//暂点
    ,[10.09,  1.5 ,  -2.4150 ,  359.900000  ,200]//移动

    ,[10.091,  1.5  ,  -2.4150 ,  359.900000  ,100,21,0]//暂点
    ,[10.092,  1.5  ,  -2.4150 ,  359.900000  ,100,20,0]//暂点
    ,[10.093,  1.5  ,  -2.4150 ,  359.900000  ,100,19,0]//暂点
    ,[10.094,  1.5  ,  -2.4150 ,  359.900000  ,100,18,0]//暂点
    ,[10.095,  1.5  ,  -2.4150 ,  359.900000  ,100,17,0]//暂点
    ,[10.096,  1.5  ,  -2.4150 ,  359.900000  ,100,16,0]//暂点
    ,[10.097,  1.5  ,  -2.4150 ,  359.900000  ,100,15,0]//暂点
    ,[10.098,  1.5  ,  -2.4150 ,  359.900000  ,100,14,0]//暂点

    ,[10.1    ,1.5   ,-13      ,359.9     ,90]//移动
    ,[10.101    ,1.5   ,-13      ,359.9     ,200,13,0]//暂点
    ,[10.102    ,1.5   ,-13      ,359.9     ,200,12,0]//暂点
    ,[10.103    ,1.5   ,-13      ,359.9     ,200,11,0]//暂点


    ,[10.100    ,1.5   ,-13.5      ,85        ,300]//拐角旋转

    ,[10.003    ,1.5   ,-13.5      ,85        ,200,10,-1]//暂点
    ,[10.002    ,1.5   ,-13.5      ,85        ,200,9,-1]//暂点
    ,[10.001    ,1.5   ,-13.5      ,85        ,200,8,-1]//暂点

    ,[2.003 ,  1.5  ,  -13.5  ,  88.46666687,200]//移动
    ,[2.002 ,  1.5  ,  -13.5  ,  88.46666687,200,7,-1]//暂点
    ,[2.001 ,  1.5  ,  -13.5  ,  88.46666687,150,6,-1]//暂点
    ,[2.000 ,  1.5  ,  -13.5  ,  88.46666687,150,5,-1]//暂点

    ,[-0.74166 ,  1.5  ,  -13.5  ,  156.252,90]//旋转
    ,[-0.74167 ,  1.5  ,  -13.5  ,  156.252,150,4,-1]//暂点
    ,[-0.74168 ,  1.5  ,  -13.5  ,  156.252,150,3,2]//暂点
    ,[-0.74169 ,  1.5  ,  -13.5  ,  156.252,150,2,2]//暂点
    ,[-1.5    ,1.5  ,-13.5      ,175       ,100]
    ,[-1.51    ,1.5   ,-13.5      ,175       ,200,1,2]//暂点

    ,[-1.52    ,1.5   ,-7.6     ,100       ,100]

    ,[-8.7755,  1.5  ,  -4.10800  ,  90,80]
    ,[-8.7756,  1.5  ,  -4.10800  ,  90,200,0,-1]//暂点
    //,[-9      ,1.3   ,-4       ,90        ,10]/**/
    //  ,[12 ,1.1,-10,3.8  ,359.9 ,200]
];
//可移动的范围
var movableRange=[
    [-12.5  ,  15.7  ,  -8.7  ,  7]
    ,[-5  ,  15  ,  -16.6  ,  -6.1]
    ,[-12.7  , -4.8  ,  5.58  , 11]
    ,[-15.9  , -12  ,  -8.68 ,4.6]
];
var immovableRange=[
    [4.33  ,  7.33  ,  -1.33  ,  1.28]
];
/////////////用于playerControl.js中的数组结束////////////////
/////////////用于sceneSet.js中的数组开始/////////////////////
//所有NPC的初始位置
var mansPA=[
    //x,y,z,angel
    [-11.215263993037595  ,  1.5  ,  8.191814311489582  ,  118.99999999999993]
    ,[6.0994360770957465  ,  1.5  ,  5.974741633704223  ,  146.60000000000304]
    ,[14.13145798088191  ,  1.5  ,  6.133673085090651  ,  211.39999999999952]
    ,[1.1406137996181736  ,  1.5  ,  -5.2989479773632056  ,  58.60000000000006]
    ,[14.866723168569699  ,  1.5  ,  -1.757046238133216  ,  92.00000000000196]//黑人
    ,[12.94001066573755  ,  1.5  ,  6.7446909362046075  ,  26.799999999999862]
    ,[7.41259503438749    ,  1.1578718,  8.15               ,  0.1    , 3]
    ,[0.549427255         ,  1.3      ,  -16.4              ,  175.7,    4]
    ,[-1.7598113015704817  ,  1.5  ,  -10.845998385805961  ,  272.0000000000004]
    //,[-1.0324074232744018  ,  1.5  ,  -10.694413409350624  ,  253.0000000000002]
    ,[7.916283608303071  ,  1.5  ,  -3.3919279670743823  ,  182.10000000000122]
    ,[-1.3483412174361562  ,  1.5  ,  -10.54350332862184  ,  184.39999999999975]

    ,[14.161096806545395  ,  1.5  ,  -14.946429949652655  ,  1.2000000000001592]
    ,[14.841641740526702  ,  1.5  ,  -12.640860926047564  ,  98.00000000000064]
    ,[3.207244666182476  ,  1.5  ,  -9.23190063568603  ,  327.000000000001]
    ,[-3.24925481385092  ,  1.5  ,  -3.5062045576624006  ,  181.80000000000146]
    ,[-3.79916191009993  ,  1.5  ,  -4.133938757939502  ,  268.00000000000193]
    ,[-5.198441390510729  ,  1.5  ,  -0.33395721032912373  ,  357.2000000000013]
    ,[-5.409697595427484  ,  1.5  ,  9.037834393447744  ,  2.2000000000021043]
    ,[-6.108983858782972  ,  1.5  ,  9.127374954577471  ,  359.00000000000176]
    ,[-3.2713849471790635  ,  1.5  ,  5.965014698532715  ,  273.60000000000264]
    ,[-0.2287808832765767  ,  1.5  ,  7.481763740059501  ,  88.60000000000336]

    ,[-5.74688437857656  ,  1.5  ,  -7.268768937499949  ,  194.2000000000007]
    ,[-5.925696409131607  ,  1.5  ,  -6.591992565476828  ,  165.20000000000078]
    ,[36 -6.506956145908379  ,  1.5  ,  -6.042322556833282  ,  133.40000000000103]
    ,[-7.5796204356444905  ,  1.5  ,  -5.79861920945185  ,  102.80000000000103]
    ,[-7.967092679996584  ,  1.5  ,  -6.114633860784269  ,  50.80000000000109]
    ,[-7.615251031591908  ,  1.5  ,  -7.050693396523251  ,  339.40000000000157]
    ,[-6.642211958855326  ,  1.5  ,  -7.563718700897153  ,  297.20000000000164]
    ,[-4.736464754094935  ,  1.5  ,  -7.896275835416121  ,  259.4000000000023]
    ,[-4.207458027031672  ,  1.5  ,  -7.168160540478695  ,  215.60000000000275]


    ,[0.9715921106007324  ,  1.1578718447325231  ,  -7.651828715567054  ,  357.20000000000033,4.01]
    ,[11.030071424858484  ,  1.1578718447325231  ,  -12.106949537324928  ,  124.59999999999935,2.1]
    ,[-10.127436557930492  ,  1.1578718447325231  ,  4.776125664553396  ,  115.7999999999999,2.05]
    ,[12.906481612564649  ,  1.1578718447325231  ,  1.9462897957263725  ,  95.20000000000012,2.02]
    ,[0.4059146554878811  ,  1.1578718447325231  ,  0.10260303293667161  ,  65.19999999999979,3.03]
    ,[-1.909294797074652  ,  1.1578718447325231  ,  4.104288580787179  ,  212.79999999999924,3.04]
];
var womansPA=[
    //x,y,z,angel
    [0.7936744232526445  ,  1.5  ,  -5.740518963274485  ,  332.0000000000002]
    ,[4.767338827259332  ,  1.5  ,  4.528034373825732  ,  313.8000000000011]
    ,[12.963369610485431  ,  1.5  ,  -10.365705440567679  ,  286.80000000000115]
    ,[1.3417318369199043  ,  1.5  ,  -6.1086429046470485  ,  224.79999999999973]


    ,[-12.630478451619066  ,  1.5  ,  5.905896982071589  ,  301.7999999999996]

    ,[14.744220569854654  ,  1.5  ,  -13.334048574166664  ,  275.8000000000002]
    ,[4.2932052500855935  ,  1.5  ,  -8.606826448976776  ,  154.20000000000078]
    ,[4.505431371650455  ,  1.5  ,  -3.106388540075255  ,  288.20000000000164]
    //,[-5.0393703036544135  ,  1.5  ,  -4.212242513837052  ,  341.20000000000226]
    ,[-5.193203375875761  ,  1.5  ,  0.16418884612836632  ,  4.600000000001376]
    ,[-5.2384032287940885  ,  1.5  ,  -3.3003388998225103  ,  10.400000000000166]
    //,[-5.434917000314735  ,  1.5  ,  8.791422274173105  ,  180.80000000000197]
    //,[-5.009412732238582  ,  1.5  ,  9.158088757173358  ,  179.80000000000183]
    ,[-3.829453689027898  ,  1.5  ,  6.284361068515531  ,  306.80000000000246]
    ,[-2.5539290814204687  ,  1.5  ,  6.2204693533906426  ,  241.8000000000028]
    ,[-0.2001462991525702  ,  1.5  ,  5.6816311539122  ,  266.4000000000035]

    ,[-13.424865072134937  ,  1.5  ,  -4.728016852463807  ,  350.7999999999994]
    ,[-7.060145141569614  ,  1.5  ,  0.6417923810831885  ,  177.9999999999996]
    ,[-7.393313637853656  ,  1.5  ,  0.8631490007805233  ,  123.59999999999951]
    ,[-8.187350559166715  ,  1.5  ,  0.960644475504635  ,  84.99999999999959]
    ,[-8.747862518830825  ,  1.5  ,  0.5413279565437212  ,  38.39999999999957]
    ,[-8.774733985192082  ,  1.5  ,  -0.1581560849437138  ,  1.9999999999995735]
    ,[-8.46987768411186  ,  1.5  ,  -0.8977929118335628  ,  319.39999999999975]
    ,[-7.669999527986747  ,  1.5  ,  -0.9117548369833783  ,  260.39999999999947]
    ,[-7.310585368877401  ,  1.5  ,  -0.4313160144141353  ,  211.79999999999953]

    ,[2.107361413172582  ,  1.5  ,  -1.7232374489972309  ,  286.6000000000002]
    ,[1.951137158654415  ,  1.5  ,  -1.2350543874664068  ,  331.39999999999947]
    //,[-2.0602127007157405  ,  1.5  ,  -10.411277000348477  ,  317.8000000000008]
    ,[5.975289656703784  ,  1.5  ,  -2.622661686591081  ,  34.39999999999996]
    ,[-1.8477539002130574  ,  1.5  ,  -10.172704932768527  ,  119.39999999999984]
    //,[3.4506545152258834  ,  1.1578718447325231  ,  7.723192480438149  ,  270.2000000000017]
    //,[14.330649041648911  ,  1.1578718447325231  ,  6.365655735169074  ,  358.80000000000206]
    //,[-4.764373339591165  ,  1.3  ,  -13.241801541638669  ,  180]//
    //,[8.66264149751766  ,  1.3  ,  -6.979814676689706  ,  133.39999999999995]
    //,[-5.549427255404518  ,  1.3  ,  -16.4  ,  0]
    //,[13.222493672367955  ,  1.3  ,  7.509904782764141  ,  227.8783333333327]
];
//开始展板
var boardsParam = [//大小 位置 方向
    [4.091657844057312, 2.3056460937000214, 0.01176634553946542, -8.909792881532066, 1.9124609742968897, -9.256320512989747, 0, 0, 0],
    [0.010599077597660479, 1.1745017574232737, 1.654379087294616,  -5.907859135979458, 1.7830039410016782, -10.753773618611733, 0, 0, 0],
    [0.010599077597660479, 1.1745017574232737, 1.654379087294616, -5.901602133835355, 1.7830039410016782, -13.23505940666692, 0, 0, 0],
    [0.010599077597660479, 1.1745017574232737, 1.654379087294616, -5.897953439583871, 1.7830039410016782, -15.725626938591304, 0, 0, 0],
    [1.691044679829737, 1.1945762358103933, 0.008926124242713879, -3.546035972642741, 1.7706600691732248, -17.131655297273937, 0, 0, 0],
    [1.691044679829737, 1.1945762358103933, 0.008926124242713879, -0.7015946412832088, 1.7706600691732248, -17.131655297273937, 0, 0, 0],
    [1.691044679829737, 1.1945762358103933, 0.008926124242713879, 2.1421739160384474, 1.7706600691732248, -17.131655297273937, 0, 0, 0],
    [1.691044679829737, 1.1945762358103933, 0.008926124242713879, 4.963637414631924, 1.7706600691732248, -17.131655297273937, 0, 0, 0],
    [1.691044679829737, 1.1945762358103933, 0.008926124242713879, 7.796012115183569, 1.7706600691732248, -17.131655297273937, 0, 0, 0],
    [1.691044679829737, 1.1945762358103933, 0.008926124242713879, 10.63457418656429, 1.7706600691732248, -17.131655297273937, 0, 0, 0],
    [1.691044679829737, 1.1945762358103933, 0.008926124242713879, 13.453482413197213, 1.7706600691732248, -17.131655297273937, 0, 0, 0],
    [0.02065276415281849, 1.1945762358103933, 1.6997984902944274, 15.70707324831988, 1.7706600691732248, -15.706905237147904, 0, 0, 0],
    [0.02065276415281849, 1.1945762358103933, 1.6997984902944274, 15.70707324831988, 1.7706600691732248, -13.211946428307964, 0, 0, 0],
    [0.02065276415281849, 1.1945762358103933, 1.6997984902944274, 15.70707324831988, 1.7706600691732248, -10.724291475852379, 0, 0, 0],
    [0.02065276415281849, 0.8516952302377893, 0.8852607606776453, 16.498522784217172, 2.0642004223107207, -7.195719101758211, 0, 0, 0],
    [0.02065276415281849, 1.1234035081685791, 1.1090229464587142, 16.37498475563906, 2.450011896190219, -5.689589162879588, 0, 0, 0],
    [0.02065276415281849, 1.1234035081685791, 1.1090229464587142, 16.386000893702874, 2.2346962257766316, -4.056802601861485, -35.67435309216567, 0, 0],
    [0.02065276415281849, 1.0063712361382386, 1.174095764307404, 16.37498475563906, 2.756829319558299, -2.3537705769505406, 0, 0, 0],
    [0.02065276415281849, 1.0063712361382386, 1.174095764307404, 16.37498475563906, 2.756829319558299, -0.40991602441554686, 0, 0, 0],
    [0.02065276415281849, 1.1522097326666119, 1.174095764307404, 16.37051672743083, 0.9747721598636865, -2.6488227822304475, 0, 0, 0],
    [0.02065276415281849, 1.1522097326666119, 1.174095764307404, 16.357968508120123, 0.9747721598636865, -0.7067283815573839, 0, 0, 0],
    [0.02065276415281849, 0.9815193804380685, 1.174095764307404, 16.37856913029197, 2.1437550731257553, 2.0488633180859277, 0, 0, 0],
    [0.02065276415281849, 3.2896455451836415, 5.045272143302122, 17.587360087003855, 1.7940671906006833, 6.309757364971027, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 11.12858879382597, 2.687377309813881, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 11.12858879382597, 1.8055996466912383, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 11.13916318248508, 0.9114424634821181, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 9.731771690193343, 2.6940060876386953, 9.974265186248957, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 9.731771690193343, 1.7925930594365984, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 9.731771690193343, 0.9186269695670473, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 8.321764343514307, 2.6978843040505542, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 8.321764343514307, 1.7985782606721958, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 8.309189657782083, 0.9101302632058015, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 6.894176162403443, 2.6949026235821725, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 6.894176162403443, 1.7983666601742585, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 6.894176162403443, 0.9186536031314434, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 5.484253798127217, 2.6809407818557895, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 5.484253798127217, 1.790771233794247, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 5.484253798127217, 0.9024866095898343, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 4.068046346897021, 2.695779851128896, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 4.068046346897021, 1.8003124291928114, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 4.068046346897021, 0.9041244346790123, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 2.655837994677737, 2.6873594062137176, 9.985087835092223, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 2.655837994677737, 1.8019947035330683, 9.994398409513604, 0, 0, 0],
    [0.9527460318373006, 0.5864052729773982, 0.026906885939693544, 2.655837994677737, 0.9175205245987359, 9.985087835092223, 0, 0, 0],
    [1.7968283386811337, 2.8540683988785616, 0.015510567820302749, -0.9165227159107279, 1.6363659570363904, 8.528148400082351, 0, 1.8536412548498682, 0],
    [1.7968283386811337, 2.8540683988785616, 0.015510567820302749, -3.1074411506067445, 1.6363659570363904, 8.564722104845222, 0, 0.26614314420700286, 0],
    [0.021384059254194687, 2.619439432969833, 1.7250917099376022, -4.4377040143083395, 1.7699605738581128, 10.55427194078644, 0, 0, 0],
    [1.6887945589628415, 2.619439432969833, 0.028338269276097373, -5.482768616082394, 1.7543051754288888, 11.84360263382407, 0, 0, 0],
    [1.6887945589628415, 2.6601691764684507, 0.028338269276097373, -7.654493808608718, 1.7517079580512793, 11.84360263382407, 0, 0, 0],
    [1.6887945589628415, 2.6601691764684507, 0.028338269276097373, -9.847970413033496, 1.7517079580512793, 11.84360263382407, 0, 0, 0],
    [1.6887945589628415, 2.6601691764684507, 0.028338269276097373, -12.066379278538957, 1.7517079580512793, 11.841457450861675, 0, 0, 0],
    [0.042142305575172165, 2.6952802298819525, 1.7684304847172085, -13.410987973243031, 1.7517079580512793, 10.260645185356532, 0, 0, 0],
    [0.042142305575172165, 2.6952802298819525, 1.7684304847172085, -13.432857011457168, 1.7517079580512793, 7.556080296962438, 0, 0, 0]
];
//完成展板
//开始展板中的
/////////////用于sceneSet.js中的数组结束/////////////////////