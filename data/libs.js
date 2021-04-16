module.exports = [
  {
    id: 'hotwire',
    name: 'Hotwire Turbo',
    description: `
    Hotwire is an alternative approach to building modern web applications without using much JavaScript by sending HTML instead of JSON over the wire. This makes for fast first-load pages, keeps template rendering on the server, and allows for a simpler, more productive development experience in any programming language, without sacrificing any of the speed or responsiveness associated with a traditional single-page application.
    `,
    website: 'https://hotwire.dev',
    github: {
      stars: 0,
      forks: 0,
      issues: 0,
      url: 'https://github.com/hotwired/turbo'
    },
    language: 'TypeScript',
    ajax: true,
    history: true,
    animation: true,
    websockets: true,
    sse: true ,
    agnostic: true,
    extendable: false,
    dependencyFree: true,
    ie11: false,
    nocompilation: true,
    cdn: false,
    frameworks: ['all','Django','Laravel','RAILS','Symfony'],
    features:[ ],
    releasedIn: 'Dec 2020',
    summary: `Hotwire is an alternative approach to building modern web applications without using much JavaScript by sending HTML instead of JSON over the wire.`
  },
  {
    id: 'liveview',
    name: 'Phoenix LiveView',
    description:`
    Phoenix LiveView enables rich, real-time user experiences with server-rendered HTML.
    The LiveView programming model is declarative: instead of saying "once event X happens, change Y on the page", events in LiveView are regular messages which may cause changes to its state. Once the state changes, LiveView will re-render the relevant parts of its HTML template and push it to the browser, which updates itself in the most efficient manner. This means developers write LiveView templates as any other server-rendered HTML and LiveView does the hard work of tracking changes and sending the relevant diffs to the browser.
    `,
    website: 'https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html',
    github: {
      stars: 0,
      forks: 0,
      issues: 0,
      url: 'https://github.com/phoenixframework/phoenix_live_view'
    },
    language: 'Elixir',
    ajax: true,
    history: true,
    animation: true,
    websockets: true,
    sse: false,
    agnostic: false,
    extendable: false,
    dependencyFree: false,
    ie11: false,
    nocompilation: false,
    cdn: false,
    frameworks: ['Phoenix'],
    features: [],
    releasedIn: 'Oct 2018',
    summary: 'Phoenix LiveView enables rich, real-time user experiences with server-rendered HTML.'
  },
  {
    id: 'livewire',
    name: 'Laravel Livewire',
    description: `
    Livewire is a full-stack framework for Laravel that makes building dynamic interfaces simple, without leaving the comfort of Laravel.
    `,
    website: 'https://laravel-livewire.com/',
    github: {
      stars: 0,
      forks: 0,
      issues: 0,
      url: 'https://github.com/livewire/livewire'
    },
    language: 'PHP',
    ajax: true,
    history: true,
    animation: true,
    websockets: true,
    sse: false,
    agnostic: false,
    extendable: false,
    dependencyFree: false,
    ie11: false,
    nocompilation: false,
    cdn: false,
    frameworks: ['Laravel'],
    features: [],
    releasedIn: 'Jan 2019',
    summary: 'Livewire is a full-stack framework for Laravel that makes building dynamic interfaces simple, without leaving the comfort of Laravel.'
  },
  {
    id: 'sockpuppet',
    name: 'Sockpuppet',
    description: `
    Sockpuppet is a new way to craft modern, reactive web interfaces with Django.
We extend the capabilities of both Django and Stimulus by intercepting user interactions and passing them to Django over real-time websockets. These interactions are processed by Reflex actions that change application state. The current page is quickly re-rendered and the changes are sent to the client. The page is then morphed to reflect the new application state. This entire round-trip allows us to update the UI in 20-30ms without flicker or expensive page loads`,
    website: 'https://sockpuppet.argpar.se/',
    github: {
      stars: 0,
      forks: 0,
      issues: 0,
      url: 'https://github.com/jonathan-s/django-sockpuppet'
    },
    language: 'Python',
    ajax: true,
    history: true,
    animation: true,
    websockets: true,
    sse: false,
    agnostic: false,
    extendable: false,
    dependencyFree: false,
    ie11: false,
    nocompilation: false,
    cdn: false,
    frameworks: ['Django'],
    features: [
      'Enable small teams to do big things, faster 🏃🏽‍♀️',
      'Increase developer happiness ❤️❤️❤️',
      'Facilitate simple, concise, and clear code 🤸',
      'Integrate seamlessly with Django 🚝'
    ],
    releasedIn: 'Aug 2019',
    summary: 'Sockpuppet is a new way to craft modern, reactive web interfaces with Django.'
  },
  {
    id: 'htmx',
    name: 'htmx',
    description: `
    htmx allows you to access AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext

htmx is small (~10k min.gz'd), dependency-free, extendable & IE11 compatible
    `,
    website: 'https://htmx.org/',
    github: {
      stars: 0,
      forks: 0,
      issues: 0,
      url: 'https://github.com/bigskysoftware/htmx/'
    },
    language: 'Javascript',
    ajax: true,
    history: true,
    animation: true,
    websockets: true,
    sse: true,
    agnostic: true,
    extendable: true,
    dependencyFree: true,
    ie11: true,
    nocompilation: true,
    cdn: true,
    frameworks: ['all','Django', 'RAILS','Phoenix', 'Laravel', 'Node'],
    features: [
      'Htmx is a library that allows you to access modern browser features directly from HTML, rather than using javascript.',
      'Htmx extends and generalizes the core idea of HTML as a hypertext, opening up many more possibilities directly within the language',
      'Any element, not just anchors and forms, can issue an HTTP request',
      'Any event, not just clicks or form submissions, can trigger requests',
      'Any element, not just the entire window, can be the target for update by the request'
    ],
    releasedIn: 'Apr 2020',
    summary: 'High power tools for html'
  },
  {
    id: 'unpoly',
    name: 'Unpoly',
    website: 'https://unpoly.com/',
    description: `The unobtrusive JavaScript framework
for server-side web applications
Unpoly enables fast and flexible frontends while keeping rendering logic on the server.
It has no dependencies and plays nice with existing code.`,
    github: {
      stars: 0,
      forks: 0,
      issues: 0,
      url: 'https://github.com/unpoly/unpoly'
    },
    language: 'CoffeeScript',
    ajax: true,
    history: true,
    animation: true,
    websockets: false,
    sse: false,
    agnostic: true,
    extendable: true,
    dependencyFree: true,
    ie11: false,
    nocompilation: true,
    cdn: true,
    frameworks: ['all','Django', 'RAILS','Phoenix', 'Laravel', 'Node'],
    features: [
      'Smoother navigation: Unpoly links can update page fragments instead of full pages. No JavaScript required.',
      'Branch off into layers: Branch off interactions into modals, popups or drawers. Return to the main page when you\'re done.',
      'Animation: Animate page changes with fade, swipe or zoom transitions.',
      'Faster response times: Outsmart latency by preloading pages, following links earlier, caching responses and keeping a persistent CSS / JS environment.',
      'Structure for JavaScript snippets: Organize your frontend code in compilers and let Unpoly pair HTML elements with JavaScript behavior.',
      'Better forms: Submit forms via AJAX. Work with forms within modals. Validate forms against server rules while filling in fields.',
      'Plays nice with existing code: Migrate any server-side web application with minimal changes to existing code.',
      'Extensible: Build your own components using Unpoly\'s extensive Javascript API and event model.',
      'Degrades gracefully: Unpoly supports all modern browsers. On old IEs features are disabled gracefully.'

    ],
    releasedIn: 'Dec 2014',
    summary: 'The unobtrusive JavaScript framework for server-side web applications'
  },
  {
    id: 'reactor',
    name: 'Reactor',
    description: `
    Reactor enables you to do something similar to Phoenix framework LiveView using Django Channels.`,
    website: 'https://github.com/edelvalle/reactor',
    github: {
      stars: 0,
      forks: 0,
      issues: 0,
      url: 'https://github.com/edelvalle/reactor'
    },
    language: 'Python',
    ajax: true,
    history: true,
    animation: true,
    websockets: true,
    sse: false,
    agnostic: false,
    extendable: false,
    dependencyFree: false,
    ie11: false,
    nocompilation: false,
    cdn: false,
    frameworks: ['Django'],
    features: [],
    releasedIn: 'Apr 2019',
    summary: `Reactor enables you to do something similar to Phoenix framework LiveView using Django Channels.`
  }
];
