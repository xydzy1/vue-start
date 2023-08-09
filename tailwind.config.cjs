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
        p2_cbutton: '#766AD4',
        p3_cbutton: '#6291C4',
        p4_cbutton: '#4E89FF',
        //text color
        p2_cword1_1: '#FF4848',
        p2_cword1_2: '#F0BC2D',
        p2_cword2_1: '#4CC1F7',
        p2_cword2_2: '#1A52EE',
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
        'p3_shadow': '0px 4px 12px 0px rgba(0, 0, 0, 0.06)',
      },
      spacing:{
        '11': '44px',
        '15': '60px',
        '41.5': '166px',
        '45': '180px',
        '66': '264px',
        '110': '440px',
        '114': '456px',
        '125': '500px',
        '130': '520px',
        '140': '560px',
        '152.5': '610px',
        '160': '640px',
        '760': '760px',
        '1000': '1000px',
        '1280': '1280px',
        '1500': '1500px',
        '2100': '2100px',
        '3100': '3100px',
        '3600': '3600px',
        '4100': '4100px',
        '4600': '4600px',
        '3/5': '60%',
        '1/7': '14.2857143%',
        '1/8': '12.5%',
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
        '12': '3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
