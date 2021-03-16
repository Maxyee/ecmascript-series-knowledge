function foo(x) {
    console.log( x );
}

foo( 42 );

//-----------------------------

function foo([x, y]){
    console.log(x, y);
}

foo([1, 2]);    // 1 2
foo([ 1 ]);     // 1 undefined
foo( [] );      // undefined undefined

//------------------------------

function foo( {x, y} ){
    console.log(x, y);
}

foo({ y: 1, x: 2 } );   // 2 1
foo({ y: 42 });         // undefined 42
foo( {} );              // undefined undefined

//----------------------------------------------

function f1([x=2, y=3, z]){/*..*/}
function f2([x, y, ...z ], w) {/*..*/}
function f3([x, y, ...z ], ...w){/*..*/}

function f4({x: X, y}) {/*..*/}
function f5({x: X = 10, y = 20 }){/*..*/}
function f6({x = 10} = {}, { y } = { y:10 }){ /*..*/ }

function f3([x, y, ...z], ...w){
    console.log(x, y, z, w);
}

f3([]);                 // undefined undefined [] []
f3([1,2,3,4],5, 6);     // 1 2 [3,4] [5,6]

//-----------------------------------------------

// Destructuring Defaults + Parameter Defaults

function f6({ x = 10} = {}, { y } = { y: 10}){
    console.log( x, y );
}

f6();           // 10 10
f6( undefined, undefined ); // 10 10
f6( {}, undefined );    // 10 10
f6( {}, {} );    // 10 undefined
f6( undefined, {} ) // 10 undefined
f6( {x: 2}, { y: 3} )   // 2 3


// Nested Defaults: Destructuring and Restructured

var defaults = {
    options: {
        remove: true,
        enable: false,
        instance: {}
    },
    log: {
        warn: true,
        error: true
    }
};


var config = {
    options: {
        remove: false,
        instance: null
    }
};

config.options = config.options || {};
config.options.remove = (config.options.remove !== undefined) ? 
    config.options.remove : defaults.options.remove;
config.options.enable = (config.options.enable !== undefined) ?
    config.options.enable : defaults.options.enable;

// lets see in ES6 object destructuring 

// config.options = config.options || {};
// config.log = config.log || {};
// {
//     options: {
//         remove: config.options.remove = defaults.options.remove,
//         enable: config.options.enable = defaults.options.enable,
//         instance: config.options.instance = defaults.options.instance
//     } = {},
//     log: {
//         warn: config.log.warn = defaults.log.warn,
//         error: config.log.error = defaults.log.error
//     } = {}
// } = config;


// merge defaults into config
{
    // destructure (with default value assignment)
    let {
        options : {
            remove = defaults.options.remove,
            enable = defaults.options.enable,
            instance = defaults.options.instance
        } = {},
        log : {
            warn = defaults.log.warn,
            error = defaults.log.error
        } = {}
    } = config;

    // restructure
    config = {
        options: { remove, enable, instance },
        log : { warn, error }
    };
}

function runSomething(o){
    var x = Math.random(),
        y = Math.random();

    return o.something(x, y);
}

runSomething({
    something: function something(x, y){
        if(x > y){
            //recursive call with `x`
            // and `y` swapped
            return something(y, x);
        }

        return y - x;
    }
});

// pretty common practice when the object literal does have an identifying name

var controller = {
    makeRequest: function(/*..*/){
        //...
        controller.makeRequest(/*...*/);
    }
};

//others prefer to use this to define such things:
var controller = {
    makeRequest: function(/*..*/){
        //..
        this.makeRequest(/*..*/)
    }
};

//another this binding hazard, with the hacky var self = this, such as:
var controller = {
    makeRequest: function(/*..*/){
        var self = this;

        btn.addEventListener("click", function(){
            //..
            self.makeRequest(/*..*/);
        }, false );
    }
};


// concise method
runSomething({
    something: function something(x, y){
        //..
    }
});

// refactor that function with this ES6

runSomething({
    something: function(x,y){
        if(x > y){
            return something(y, x);
        }

        return y - x;
    }
});
