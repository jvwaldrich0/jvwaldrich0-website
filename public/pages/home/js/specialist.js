
  consoleText(
    ['Software Development',
    'Information Security'],
    'specialist',['rgba(255,255,255,0.5)','rgba(255,255,255,0.5)',]);

        function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {

            if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
            } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
            }
        }, 75)
        window.setInterval(function() {
            if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

            } else {
            con.className = 'console-underscore'

            visible = true;
            }
        }, 400)
        }
        let menuToggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation')

        menuToggle.onclick = function()
        {
            menuToggle.classList.toggle('active')
            navigation.classList.toggle('active')
        }

        let list = document.querySelectorAll('.list');
        for (let i = 0; i < list.length; i++)
        {
            list[i].onclick = function()
            {
                let j = 0;
                while(j < list.length)
                {
                    list[j++].className = 'list';
                }
                list[i].className = 'list active'
            }
        }
