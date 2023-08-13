module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //background color
        p1_c1: '#ABC5F3',
        p1_c2: '#C2DEF4',
        p1_c3: '#D5F2F4',
        p3_c1: '#FFF5F5',
        p3_c2: '#DDE2F6',
        //button color
        login_cborder: '#313131',
        p1_cbutton1: '#7BAFEE',
        p1_cbutton2: '#7786EB',
        p2_cbutton1: '#766AD4',
        p2_cbutton2: '#D46A6A',
        p2_cbutton3: '#6A91D4',
        p3_cbutton: '#6291C4',
        p4_cbutton: '#4E89FF',
        //text color
        p2_cword1_1: '#FF4848',
        p2_cword1_2: '#F0BC2D',
        p2_cword2_1: '#4CC1F7',
        p2_cword2_2: '#1A52EE',
        p2_cword3: '#707070',
        p3_cword1_1: '#23A1CB',
        p3_cword1_2: '#3AF4EB',
        p3_cword2_1: '#F74CBE',
        p3_cword2_2: '#1A52EE',
        p3_cword3: '#9E9E9E',
        p3_cword4: '#787878',
        p4_cword1_1: '#FF3C3C',
        p4_cword1_2: '#663CFF',
        p4_cword2_1: '#F74C88',
        p4_cword2_2: '#CA0F9E',
      },
      container: {
        center: true,
        padding: '10px',
      },
      boxShadow: {
        'p1_shadow': '0px 6px 32px 0px rgba(0, 0, 0, 0.12)',
        'p1_shadow2': '1px 2px 6px 0px rgba(0, 0, 0, 0.08)',
        'p3_shadow': '0px 4px 12px 0px rgba(0, 0, 0, 0.06)',
        'p4_shadow': '0px 6px 16px 0px rgba(0, 0, 0, 0.08)',
      },
      spacing:{
        '11': '44px',
        '15': '60px',
        'nav_py': '17.5px',
        'search_frame_my': '19px',
        '4.5': '22px',
        '25': '100px',
        '41.5': '166px',
        '45': '180px',
        '50': '200px',
        'logo_bottom': '202px',
        '66': '264px',
        'search_frame_narrow' : '320px',
        'search_frame_wide': '440px',
        '114': '456px',
        '125': '500px',
        '130': '520px',
        '140': '560px',
        '152.5': '610px',
        'p1_1_wh': '620px',
        'p1_1_nh': '660px',
        'p1_2_wh' : '632px',
        'p1_2_nh' : '592px',
        '160': '640px',
        '760': '760px',
        '1000': '1000px',
        'p4_h': '1160px',
        '1280': '1280px',
        '1500': '1500px',
        'p2_mt': '1252px',
        'p3_mt1': '2352px',
        'p3_mt2': '2852px',
        'p4_mt1': '3352px',
        'p4_mt2': '4352px',
        'p4_mt3': '5352px',
        '3/5': '60%',
        '1/7': '14.2857143%',
        '1/8': '12.5%',
      },
      letterSpacing: {
        'widest': '.24em',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '4/7': '57.1428571%',
      },
      fontFamily: {
        'Sara': ['Sarasa Gothic SC'],
      },
      fontSize: {
        '4.5': ['18px', '26px'],
      },
      lineHeight: {
        '12': '3rem',
      },
      screens: {
        'minw': '1200px',
      },
      minWidth:{
        '36': '144px',
        '72': '288px'
      },
      maxWidth:{
        /* 启用最大宽度1280
        '1280': '1280px'
        */
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
