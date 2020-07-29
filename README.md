# Fantasy Website [![Netlify Status](https://api.netlify.com/api/v1/badges/8addb0e0-db26-4cfe-9a33-177d227b7c3a/deploy-status)](https://app.netlify.com/sites/fantasy-website/deploys)

- React website for fantasy football league

### Screens

- [x] Home ('/')
- [x] History ('/history')
- [x] Contact ('/contact')
- [x] Trading Block (GET) ('/trading-block')
    - [x] Post Player Page (POST) ('/trading-block/create')
- [ ] News ('/news')
- [ ] Top Players ('/top-players')

### Dependencies

- [x] React
- [x] React Router Dom
- [x] Node-sass
- [x] Bulma
- [x] Axios

### State

- buttonClassName ('circle icon' -> 'circle icon close')
- sliderState 
- tradingBlock ( [ arr ])
- formState


### Components 

- [x] Hamburger
- [x] Logo
- [x] Modal
- [x] Title
- [x] Nav
- [x] Footer
- [x] Overlay
- [x] Slider
- [x] ImgComp
- [x] History Card
- [x] Contact Card
- [x] Trade Card
- [x] Input Comp
- [x] Form Component
- [ ] Announcement Card


### Data Sctructure

- History Data
    - year ( string )
    - sliderPicsArr ( [ arr ] )
    - profilePic ( img )
    - ownerName ( string )
    - teamName ( string )
    - teamMVP( string )
    - mvpPoints ( number )

- Contacts Data
    - teamOwner ( string )
    - teamName ( string )
    - ownerNum ( string )
    - ownerEmail ( string )

- Trading Block Data
    - playerName ( string )
    - playerImg ( img )
    - lookingFor ( string )

### Glitches To Fix
- [ ] Nav modal is scrollable 
- [ ] Home overlay position


### To Add
- [ ] Clicking on ImgComp renders selected image larger scale in a modal
- [x] Making logo on nav link back to home page
- [ ] Fix contactCard height and making contact-container dynamic
- [ ] Add past draft boards to history page