//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream
//
const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Manas",
  openInNewTab: true,
  title: "Bento",

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,
  
  // Theme
  theme: "catppuccin-frappe",
  imageBackground: false,
  imageUrl: "background.jpg", // place in ./src/assets/images/ and provide the file name. Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  themes: [   // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    "arc",
    "bento",
    "catppuccin-frappe",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "conceptdark", // dark mode only
    "monokai",
    "nord",
    "sakura",
    "solarized",
    "summer"
  ],

  // Search Bar
  searchBar: false,
  searchEngine: "google", // google, ddg
  barStyle: "bento", // bento, minimal, boxy, rounded
  barPlaceholder: "", // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: "Good morning,",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Sweet dreams,",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "a94d362c807d21bec19e3359029bbe58", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // Autochange theme from OS preferece - The below options are all mutually exclusive. If you've got multiple set to true, the first one will be set and the rest ignored.
  changeThemeByOS: true,

  // Switch theme based on set hours. (24hr format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // Switch dark theme automatically from sunrise to sunset. Pulls from the browsers location, or falls back to the defaults if not.
  // Requires an OpenWeatherMap API key.
  changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1", // entry ID, don't modify.
      name: "Github", // set the name of the card
      icon: "fab-github", // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
      link: "https://github.com/" // provide a link to the page.
    },
    {
      id: "2",
      name: "Mail",
      icon: "envelope",
      link: "https://mail.google.com/"
    },
    {
      id: "3",
      name: "Classroom",
      icon: "list-ol",
      link: "https://classroom.google.com/a/not-turned-in/all"
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r"
    },
    {
      id: "5",
      name: "Reddit",
      icon: "fab-reddit",
      link: "https://reddit.com"
    },
    {
      id: "6",
      name: "YouTube",
      icon: "fab-youtube",
      link: "https://youtube.com/"
    }
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "fab-spotify",
      link: "https://open.spotify.com"
    },
    {
      id: "2",
      name: "twitter",
      icon: "fab-twitter",
      link: "https://twitter.com/"
    },
    {
      id: "3",
      name: "bot",
      icon: "fab-discord",
      link: "https://discord.com/app"
    },
    {
      id: "4",
      name: "Last.fm",
      icon: "fab-lastfm",
      link: "https://last.fm/"
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "fab-hashnode",
      link: "https://hashnode.com/"
    },
    {
      id: "6",
      name: "Figma",
      icon: "fab-figma",
      link: "https://figma.com/"
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com"
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com"
        },
        {
          name: "Tumblr",
          link: "https://www.tumblr.com"
        },
        {
          name: "Hacker News",
          link: "https://news.ycombinator.com"
        }
      ]
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Pure Maths Y2",
          link: "https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-pure-maths-year-2/"
        },
        {
          name: "Stats & Mech Y2",
          link: "https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-statistics-mechanics-year-2/"
        },
        {
          name: "Trello",
          link: "https://www.trello.com"
        },
        {
          name: "Slack",
          link: "https://www.slack.com"
        }
      ]
    }
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "house-user",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com"
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com"
        },
        {
          name: "Tumblr",
          link: "https://www.tumblr.com"
        },
        {
          name: "Hacker News",
          link: "https://news.ycombinator.com"
        }
      ]
    },
    {
      icon: "fab-github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/"
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/"
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/"
        },
        {
          name: "Repos",
          link: "https://github.com/appcreatorguy"
        }
      ]
    }
  ],

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: false,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: true
  }

};

export const config = CONFIG;
