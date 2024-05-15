var array = [
    {'author': '“hello omar awith u”', 
     'quote': ' i.m 13 '
    },
    {'author': 'Epictetus', 
     'quote': 'do u see me '
    },
    {'author': 'i can.t do any thing in my life', 
     'quote': 'wwhats.up'
    },
    {'author': 'Wayne Gretzy', 
     'quote': ' Frank Zappa'
    },
    {'author': '“So many books, so little time.”', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': ' Marcus Tullius Cicero', 
     'quote': ' Marcus Tullius Cicero'
    },
];

function Quote(){
    var nega = Number.parseInt(Math.random()*array.length + 1);
    document.querySelector('#quoteOutput').innerHTML = `"${array[nega].quote}"`;
    document.querySelector('#authorOutput').innerHTML = `${array[nega].author}`;

}
