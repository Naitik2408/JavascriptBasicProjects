const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];


  const authImage=document.getElementById('image_section').getElementsByTagName('img')[0];
  const authName=document.getElementById('auth_name').getElementsByTagName('h1')[0]
  const authJob=document.getElementById('auth_name').getElementsByTagName('h2')[0]
  const profileText=document.getElementById('container').getElementsByTagName('p')[0]
  const previous=document.getElementById('next_previous').getElementsByTagName('i')[0]
  const next=document.getElementById('next_previous').getElementsByTagName('i')[1]
  const surpriseMe=document.getElementById('suprise_me')
  const themeButton=document.getElementById('themButton')
  const themeButtonIcon=document.getElementById('themButton').getElementsByTagName('i')[0]
//   ------------------------------------------------------ 
  const body=document.getElementsByTagName('body')[0];

  let count=0;
  function setup(num){
    const item=reviews[num];
    authImage.src=item.img;
    authName.innerText=item.name;
    authJob.innerText=item.job;
    profileText.innerText=item.text;
  }

  previous.addEventListener('click',()=>{
    count--;
    if (count<0) {
        count = reviews.length-1;
    };
    setup(count);
  })

  next.addEventListener('click',()=>{
    count++;
    if (count>reviews.length-1) {
        count = 0;
    };
    setup(count);
  })

  surpriseMe.addEventListener('click',()=>{
    count=Math.floor(Math.random()*reviews.length);
    setup(count);
  })
  

  themeButton.addEventListener('click',()=>{
    body.classList.toggle('darktheme');
    if(body.classList.contains('darktheme')){
        themeButtonIcon.classList.remove('fa-moon')
        themeButtonIcon.classList.add('fa-sun')
    }
    else{
        themeButtonIcon.classList.remove('fa-sun')
        themeButtonIcon.classList.add('fa-moon')
    }
  })