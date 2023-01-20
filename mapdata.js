var simplemaps_continentmap_mapdata={
  main_settings: {
    //General settings
		width: "700", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#C2C5C5",
    state_hover_color: "##A6DDD9",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#C2C5C5",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    SA: {
      name: "South America",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "default"
    },
    NA: {
      name: "North America",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "default"
    },
    EU: {
      name: "Europe",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "Europe/Europe.html"
    },
    AF: {
      name: "Africa",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "Africa/Africa.html"
    },
    NS: {
      name: "North Asia",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "North Asia/North Asia.html"
    },
    SS: {
      name: "South and East Asia",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "South and East Asia/South and East Asia.html"
    },
    ME: {
      name: "Middle East",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "Middle East/Middle East.html"
    },
    OC: {
      name: "South East Asia, Australia and Oceania",
      description: "default",
      color: "#C2C5C5",
      hover_color: "#6E7070",
      url: "South and East Asia/South and East Asia.html"
    }
  },
  locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74.0059731,
      description: "default",
      color: "default",
      url: "default",
      size: "default"
    },
    "1": {
      name: "London",
      lat: 51.5073346,
      lng: -0.1276831,
      description: "default",
      color: "default",
      url: "default"
    },
    }
  }