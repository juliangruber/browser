const h = require('hyperscript');
const Emitter = require('events');

function createTab(){
  var view = createView();
  var header;

  view.on('title', title => header.innerText = title);

  const tab = h('div.tab',
    header = h('div.header', 'Untitled'),
    h('div.view', {
        style: {
          position: 'absolute',
          width: '100%',
          height: '100%'
        }
      },
      view.el
    )
  );
  return tab;
}

function createView(){
  const view = new Emitter;
  const el = view.el = h('webview', {
    src: 'https://github.com/',
    style: {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    }
  });

  el.addEventListener('did-start-loading', () => {
    view.emit('title', 'Loading...');
  });

  el.addEventListener('did-stop-loading', () => {
    view.emit('title', el.getTitle());
  });

  return view;
}

document.body.appendChild(createTab());
