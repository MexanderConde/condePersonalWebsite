// Sound Functions

function playSound0() {
   var sound0 = document.getElementById("catlol");
   sound0.currentTime = 0;
   sound0.play();
}

function playSound1() {
   var sound1 = document.getElementById("boom");
   sound1.currentTime = 0;
   sound1.play();
}

function playSound2() {
   var sound2 = document.getElementById("bell");
   sound2.currentTime = 0;
   sound2.play();
}

function playSound3() {
   var sound3 = document.getElementById("rage");
   sound3.currentTime = 0;
   sound3.play();
}

function playSound4() {
   var sound4 = document.getElementById("messi");
   sound4.currentTime = 0;
   sound4.play();
}

function playSound5() {
   var sound5 = document.getElementById("domain");
   sound5.currentTime = 0;
   sound5.play();
}

function playSound6() {
   var sound6 = document.getElementById("activate");
   sound6.currentTime = 0;
   sound6.play();
}

function playSound7() {
   var sound7 = document.getElementById("switch");
   sound7.currentTime = 0;
   sound7.play();
}

// Feedback
let popup = document.getElementById("popup");
let feedbackText = document.getElementById("feedbackText");
let thankYouMessage = document.getElementById("thankYouMessage");
let closeButton = document.getElementById("closeButton");

function openPopup() {
   popup.style.visibility = "visible";
}

function closePopup() {
   popup.style.visibility = "hidden";
   thankYouMessage.style.display = "none";
   closeButton.style.display = "none";
   feedbackText.style.display = "block";
   document.getElementById("submitButton").style.display = "inline-block";
}

function submitFeedbackForm() {
   event.preventDefault();
   feedbackText.style.display = "none";
   thankYouMessage.style.display = "block";
   closeButton.style.display = "block";
   document.getElementById("submitButton").style.display = "none";

   return false;
}


// My Gallery
// My Friends
let hoverEnabled = true;
let switchEnabled = true;
const slider = document.querySelector('.slider');
const dummy = document.querySelectorAll('.dummy');
const item = document.querySelectorAll('.item');
const dropleft = document.querySelector('.dropleft');
const droplefth1 = dropleft.querySelector('h1');

function paused(element) {
   element.onclick = null;
   hoverEnabled = !hoverEnabled;
   item.forEach(item => {
      const images = item.querySelectorAll('img');
      images.forEach(img => {
         img.classList.remove('size');
      });
      item.style.opacity = '1';
   });
   const itemParent = element.closest('.item');
   const clickables = getComputedStyle(itemParent).getPropertyValue('--position').trim();

   // Na click na

   if (itemParent.classList.contains('above')) {
      playSound5();
      element.classList.remove('hovered');
      element.classList.remove('size');
      slider.classList.remove('left');
      dummy.forEach(dummy => {
         dummy.style.opacity = '0';
      });
      switch (clickables) {
         case '1':
            droplefth1.innerHTML = '';
            break;
         case '2':
            droplefth1.innerHTML = '';
            break;
         case '3':
            droplefth1.innerHTML = '';
            break;
         case '4':
            droplefth1.innerHTML = '';
            break;
         case '5':
            droplefth1.innerHTML = '';
            break;
         case '6':
            droplefth1.innerHTML = '';
            break;
      }


      dropleft.classList.remove('left');
      setTimeout(() => {
         slider.classList.remove('nospin');
         item.forEach(item => {
            item.classList.remove('paused');
            item.classList.remove('below');
         });
         setTimeout(() => {
            itemParent.classList.remove('above');
            itemParent.classList.remove('below');
            setTimeout(() => {
               element.onclick = function () {
                  paused(element);
               };
               switchEnabled = true;
            }, 100);
         }, 1000);
      }, 2400);

      // Di pa na click

   } else {
      playSound6();
      switchEnabled = false;
      element.classList.add('hovered');
      item.forEach(item => {
         item.classList.add('paused');
         item.classList.add('below');
      });
      itemParent.classList.remove('below');
      itemParent.classList.add('above');
      dummy.forEach(dummy => {
         dummy.style.opacity = '0';
      });
      setTimeout(() => {
         slider.classList.add('nospin');
         setTimeout(() => {
            element.classList.add('size');
            slider.classList.add('left');
            dropleft.classList.add('left');

            switch (clickables) {
               case '1':
                  droplefth1.innerHTML = "Vincent - Is my first ever best friend. We know each other for a life time, when we we're kids we play every day. Invent new exciting games for us and our friends to play. Got a lot of meaningful memories with this guy.";
                  facebookLink.href = "https://www.facebook.com/vince.dead";
                  facebookLink.innerHTML = "Vincent's Facebook";
                  youtubeLink.href = "";
                  websiteIcon.src = "/Images/homePage/igIcon.png";
                  youtubeLink.innerHTML = "Vincent's Instagram";
                  break;
               case '2':
                  droplefth1.innerHTML = "Chesca - One of the most responsible and matured person in my friends group. She acts like a mother to us, specially when we're outside she guides us to almost everywhere. Chesca and Erica also loves to go to concerts and just hang around some places to places.";
                  facebookLink.href = "https://www.facebook.com/franchesca.loise";
                  facebookLink.innerHTML = "Chesca's Facebook";
                  youtubeLink.href = "https://www.instagram.com/ysca.wshrt/";
                  websiteIcon.src = "/Images/homePage/igIcon.png";
                  youtubeLink.innerHTML = "Chesca's Instagram";
                  break;
               case '3':
                  droplefth1.innerHTML = "Erica - Is a cheerful person, loud and playful. She also has a high level of confidence in everything she does. Sometimes, you'll be the one feeling embarrassed by what she does. But despite being like that, Erica is a kind friend.";
                  facebookLink.href = "https://www.facebook.com/erica.bartolo.31";
                  facebookLink.innerHTML = "Erica's Facebook";
                  youtubeLink.href = "https://www.instagram.com/_am_erica/";
                  websiteIcon.src = "/Images/homePage/igIcon.png";
                  youtubeLink.innerHTML = "Erica's Instagram";
                  break;
               case '4':
                  droplefth1.innerHTML = "Timothy - The Internet café owner. If it weren't for this guy I wouldn't have even  met Raine. Him and Raine was friends long ago before I met Raine. We all played minecraft in Timothy's com shop and that's the beginning of an amazing friendship.";
                  facebookLink.href = "https://www.facebook.com/villacarlos.timothy";
                  facebookLink.innerHTML = "Timothy's Facebook";
                  youtubeLink.href = "https://www.instagram.com/shido_199/";
                  websiteIcon.src = "/Images/homePage/igIcon.png";
                  youtubeLink.innerHTML = "Timothy's Instagram";
                  break;
               case '5':
                  droplefth1.innerHTML = "Raine - I  met this wonderful person in an Internet café almost a decade ago. Raine is very cheerful person, always fun to hangout with. With his on par confidence this guy can almost do anything. Also to mention is public confidence, that's why it's always fun to be with Raine.";
                  facebookLink.href = "https://www.facebook.com/rainezekiel.cahigada";
                  facebookLink.innerHTML = "Raine's Facebook";
                  youtubeLink.href = "https://www.youtube.com/c/ConanXDGaming";
                  websiteIcon.src = "/Images/homePage/ytIcon.png";
                  youtubeLink.innerHTML = "Raine's YouTube";
                  break;
               case '6':
                  droplefth1.innerHTML = "Mark - He's very active in terms of physical action, if Raine is a loud person then Mark is Loud in terms of physical action. Mark also spread his cheerful aura, when we're together good things just happen and laughing everything out.";
                  facebookLink.href = "https://www.facebook.com/mark.rioveros.52";
                  facebookLink.innerHTML = "Mark's Facebook";
                  youtubeLink.href = "https://www.instagram.com/bwhahajahadumpz/";
                  websiteIcon.src = "/Images/homePage/igIcon.png";
                  youtubeLink.innerHTML = "Mark's Instagram";
                  break;
               case '7':
                  droplefth1.innerHTML = "Wilzon - I forgot how I met Wilzon, but it's probably a will of faith that we met. He got a really unique personality that I can't even describe. But Wilzon is focused on achieving his goals specially academic wise.";
                  facebookLink.href = "https://www.facebook.com/profile.php?id=100071081821943";
                  facebookLink.innerHTML = "Wilzon's Facebook";
                  youtubeLink.href = "https://www.instagram.com/bwhahajahadumpz/";
                  websiteIcon.src = "/Images/homePage/igIcon.png";
                  youtubeLink.innerHTML = "Wilzon's Instagram";
                  break;
               case '8':
                  droplefth1.innerHTML = "John Amar - This guy is Mark's duo. When they're together they just bring out laughter to everyone. He is also the most recent in my friend group. But even tho he is kinda new to us, he fits perfectly with us. (new meaning more than 4+ yrs) short but meaningful";
                  facebookLink.href = "https://www.facebook.com/profile.php?id=100078183054785";
                  facebookLink.innerHTML = "John Amar's Facebook";
                  youtubeLink.href = "https://www.instagram.com/bwhahajahadumpz/";
                  websiteIcon.src = "/Images/homePage/igIcon.png";
                  youtubeLink.innerHTML = "John Amar's Instagram";
                  break;
            }

            setTimeout(() => {
               element.onclick = function () {
                  paused(element);
               };
            }, 100);
         }, 500);
      }, 300)
   }
}
item.forEach((hoveredItem) => {
   hoveredItem.addEventListener('mouseenter', () => {
      if (hoverEnabled) {
         slider.classList.add('hovered');
         item.forEach((otherItem) => {
            if (otherItem !== hoveredItem) {
               otherItem.style.opacity = '0.25';
               dummy.forEach(dummy => {
                  dummy.style.opacity = '0.40';
               });
            }
         });
      }
      if (switchEnabled) {
         console.log("play");
         playSound7();
      } else {
         console.log("no play");
      }
   });
   hoveredItem.addEventListener('mouseleave', () => {
      if (hoverEnabled) {
         slider.classList.remove('hovered');
         item.forEach((otherItem) => {
            otherItem.style.opacity = '1';
            dummy.forEach(dummy => {
               dummy.style.opacity = '1';
            });
         });
      }
   });
});

// My Family
let hoverEnabled0 = true;
let switchEnabled0 = true;
const slider0 = document.querySelector('.slider0');
const dummy0 = document.querySelectorAll('.dummy0');
const item0 = document.querySelectorAll('.item0');
const dropleft0 = document.querySelector('.dropleft0');
const droplefth10 = dropleft0.querySelector('h1');

function paused0(element) {
   element.onclick = null;
   hoverEnabled0 = !hoverEnabled0;
   item0.forEach(item0 => {
      const images = item0.querySelectorAll('img');
      images.forEach(img => {
         img.classList.remove('size');
      });
      item0.style.opacity = '1';
   });
   const itemParent0 = element.closest('.item0');
   const clickables0 = getComputedStyle(itemParent0).getPropertyValue('--position').trim();

   // Na click na

   if (itemParent0.classList.contains('above')) {
      playSound5();
      element.classList.remove('hovered');
      element.classList.remove('size');
      slider0.classList.remove('left');
      dummy0.forEach(dummy0 => {
         dummy0.style.opacity = '0';
      });
      switch (clickables0) {
         case '1':
            droplefth10.innerHTML = '';
            break;
         case '2':
            droplefth10.innerHTML = '';
            break;
         case '3':
            droplefth10.innerHTML = '';
            break;
      }


      dropleft0.classList.remove('left');
      setTimeout(() => {
         slider0.classList.remove('nospin');
         item0.forEach(item0 => {
            item0.classList.remove('paused');
            item0.classList.remove('below');
         });
         setTimeout(() => {
            itemParent0.classList.remove('above');
            itemParent0.classList.remove('below');
            setTimeout(() => {
               element.onclick = function () {
                  paused0(element);
               };
               switchEnabled0 = true;
            }, 100);
         }, 1000);
      }, 2400);

      // Di pa na click

   } else {
      playSound6();
      switchEnabled0 = false;
      element.classList.add('hovered');
      item0.forEach(item0 => {
         item0.classList.add('paused');
         item0.classList.add('below');
      });
      itemParent0.classList.remove('below');
      itemParent0.classList.add('above');
      dummy0.forEach(dummy0 => {
         dummy0.style.opacity = '0';
      });
      setTimeout(() => {
         slider0.classList.add('nospin');
         setTimeout(() => {
            element.classList.add('size');
            slider0.classList.add('left');
            dropleft0.classList.add('left');

            switch (clickables0) {
               case '1':
                  droplefth10.innerHTML = "These are some of my favorite picture with me and my family. I've chosen these pictures because I have good memories with these pictures. It is a warm sight to see and it brings me joy by seeing my family together and well.";
                  break;
               case '2':
                  droplefth10.innerHTML = "These are some of my favorite picture with me and my family. I've chosen these pictures because I have good memories with these pictures. It is a warm sight to see and it brings me joy by seeing my family together and well.";
                  break;
               case '3':
                  droplefth10.innerHTML = "These are some of my favorite picture with me and my family. I've chosen these pictures because I have good memories with these pictures. It is a warm sight to see and it brings me joy by seeing my family together and well.";
                  break;
            }

            setTimeout(() => {
               element.onclick = function () {
                  paused0(element);
               };
            }, 100);
         }, 500);
      }, 300)
   }
}
item0.forEach((hoveredItem) => {
   hoveredItem.addEventListener('mouseenter', () => {
      if (hoverEnabled0) {
         slider0.classList.add('hovered');
         item0.forEach((otherItem) => {
            if (otherItem !== hoveredItem) {
               otherItem.style.opacity = '0.25';
               dummy0.forEach(dummy0 => {
                  dummy0.style.opacity = '0.40';
               });
            }
         });
      }
      if (switchEnabled0) {
         console.log("play");
         playSound7();
      } else {
         console.log("no play");
      }
   });
   hoveredItem.addEventListener('mouseleave', () => {
      if (hoverEnabled0) {
         slider0.classList.remove('hovered');
         item0.forEach((otherItem) => {
            otherItem.style.opacity = '1';
            dummy0.forEach(dummy0 => {
               dummy0.style.opacity = '1';
            });
         });
      }
   });
});


// My Pets
let hoverEnabled1 = true;
let switchEnabled1 = true;
const slider1 = document.querySelector('.slider1');
const dummy1 = document.querySelectorAll('.dummy1');
const item1 = document.querySelectorAll('.item1');
const dropleft1 = document.querySelector('.dropleft1');
const droplefth11 = dropleft1.querySelector('h1');

function paused1(element) {
   element.onclick = null;
   hoverEnabled1 = !hoverEnabled1;
   item1.forEach(item1 => {
      const images = item1.querySelectorAll('img');
      images.forEach(img => {
         img.classList.remove('size');
      });
      item1.style.opacity = '1';
   });
   const itemParent1 = element.closest('.item1');
   const clickables1 = getComputedStyle(itemParent1).getPropertyValue('--position').trim();

   // Na click na

   if (itemParent1.classList.contains('above')) {
      playSound5();
      element.classList.remove('hovered');
      element.classList.remove('size');
      slider1.classList.remove('left');
      dummy1.forEach(dummy1 => {
         dummy1.style.opacity = '0';
      });
      switch (clickables1) {
         case '1':
            droplefth11.innerHTML = '';
            break;
         case '2':
            droplefth11.innerHTML = '';
            break;
         case '3':
            droplefth11.innerHTML = '';
            break;
      }


      dropleft1.classList.remove('left');
      setTimeout(() => {
         slider1.classList.remove('nospin');
         item1.forEach(item1 => {
            item1.classList.remove('paused');
            item1.classList.remove('below');
         });
         setTimeout(() => {
            itemParent1.classList.remove('above');
            itemParent1.classList.remove('below');
            setTimeout(() => {
               element.onclick = function () {
                  paused1(element);
               };
               switchEnabled1 = true;
            }, 100);
         }, 1000);
      }, 2400);

      // Di pa na click

   } else {
      playSound6();
      switchEnabled1 = false;
      element.classList.add('hovered');
      item1.forEach(item1 => {
         item1.classList.add('paused');
         item1.classList.add('below');
      });
      itemParent1.classList.remove('below');
      itemParent1.classList.add('above');
      dummy1.forEach(dummy1 => {
         dummy1.style.opacity = '0';
      });
      setTimeout(() => {
         slider1.classList.add('nospin');
         setTimeout(() => {
            element.classList.add('size');
            slider1.classList.add('left');
            dropleft1.classList.add('left');

            switch (clickables1) {
               case '1':
                  droplefth11.innerHTML = "Eq - She is the oldest dog in our family. She is now 8 years old and still doing well. Eq is still very active when it comes to playtime but she wants to just rest and sleep all day.";
                  break;
               case '2':
                  droplefth11.innerHTML = "Poco - He is the the youngest dog in our family. Poco is only 10 months old, Really playful and active. He runs around the house all the time and eats a lot for his age. Poco is also the biggest dog in out family, while Eq is the smallest dog.";
                  break;
               case '3':
                  droplefth11.innerHTML = "Raks - We adopted Raks not long ago and was introduced in our family. He is a male pug and is the 2nd oldest in our pets. Raks is very stubborn and a messy eater.";
                  break;
            }

            setTimeout(() => {
               element.onclick = function () {
                  paused1(element);
               };
            }, 100);
         }, 500);
      }, 300)
   }
}
item1.forEach((hoveredItem) => {
   hoveredItem.addEventListener('mouseenter', () => {
      if (hoverEnabled1) {
         slider1.classList.add('hovered');
         item1.forEach((otherItem) => {
            if (otherItem !== hoveredItem) {
               otherItem.style.opacity = '0.25';
               dummy1.forEach(dummy1 => {
                  dummy1.style.opacity = '0.40';
               });
            }
         });
      }
      if (switchEnabled1) {
         console.log("play");
         playSound7();
      } else {
         console.log("no play");
      }
   });
   hoveredItem.addEventListener('mouseleave', () => {
      if (hoverEnabled1) {
         slider1.classList.remove('hovered');
         item1.forEach((otherItem) => {
            otherItem.style.opacity = '1';
            dummy1.forEach(dummy1 => {
               dummy1.style.opacity = '1';
            });
         });
      }
   });
});

// My Self
let hoverEnabled2 = true;
let switchEnabled2 = true;
const slider2 = document.querySelector('.slider2');
const dummy2 = document.querySelectorAll('.dummy2');
const item2 = document.querySelectorAll('.item2');
const dropleft2 = document.querySelector('.dropleft2');
const droplefth12 = dropleft2.querySelector('h1');

function paused2(element) {
   element.onclick = null;
   hoverEnabled2 = !hoverEnabled2;
   item2.forEach(item2 => {
      const images = item2.querySelectorAll('img');
      images.forEach(img => {
         img.classList.remove('size');
      });
      item2.style.opacity = '1';
   });
   const itemParent1 = element.closest('.item2');
   const clickables2 = getComputedStyle(itemParent1).getPropertyValue('--position').trim();

   // Na click na

   if (itemParent1.classList.contains('above')) {
      playSound5();
      element.classList.remove('hovered');
      element.classList.remove('size');
      slider2.classList.remove('left');
      dummy2.forEach(dummy2 => {
         dummy2.style.opacity = '0';
      });
      switch (clickables2) {
         case '1':
            droplefth12.innerHTML = '';
            break;
         case '2':
            droplefth12.innerHTML = '';
            break;
         case '3':
            droplefth12.innerHTML = '';
            break;
      }


      dropleft2.classList.remove('left');
      setTimeout(() => {
         slider2.classList.remove('nospin');
         item2.forEach(item2 => {
            item2.classList.remove('paused');
            item2.classList.remove('below');
         });
         setTimeout(() => {
            itemParent1.classList.remove('above');
            itemParent1.classList.remove('below');
            setTimeout(() => {
               element.onclick = function () {
                  paused2(element);
               };
               switchEnabled2 = true;
            }, 100);
         }, 1000);
      }, 2400);

      // Di pa na click

   } else {
      playSound6();
      switchEnabled2 = false;
      element.classList.add('hovered');
      item2.forEach(item2 => {
         item2.classList.add('paused');
         item2.classList.add('below');
      });
      itemParent1.classList.remove('below');
      itemParent1.classList.add('above');
      dummy2.forEach(dummy2 => {
         dummy2.style.opacity = '0';
      });
      setTimeout(() => {
         slider2.classList.add('nospin');
         setTimeout(() => {
            element.classList.add('size');
            slider2.classList.add('left');
            dropleft2.classList.add('left');

            switch (clickables2) {
               default:
                  droplefth12.innerHTML = "My Self - My Ideal self is just to have a successful life like almost everyone. I know that I am successful when I am financially stable, still with the love of my life, a healthy relationship with my family, and a prosperous life."
                  break;
            }

            setTimeout(() => {
               element.onclick = function () {
                  paused2(element);
               };
            }, 100);
         }, 500);
      }, 300)
   }
}
item2.forEach((hoveredItem) => {
   hoveredItem.addEventListener('mouseenter', () => {
      if (hoverEnabled2) {
         slider2.classList.add('hovered');
         item2.forEach((otherItem) => {
            if (otherItem !== hoveredItem) {
               otherItem.style.opacity = '0.25';
               dummy2.forEach(dummy2 => {
                  dummy2.style.opacity = '0.40';
               });
            }
         });
      }
      if (switchEnabled2) {
         console.log("play");
         playSound7();
      } else {
         console.log("no play");
      }
   });
   hoveredItem.addEventListener('mouseleave', () => {
      if (hoverEnabled2) {
         slider2.classList.remove('hovered');
         item2.forEach((otherItem) => {
            otherItem.style.opacity = '1';
            dummy2.forEach(dummy2 => {
               dummy2.style.opacity = '1';
            });
         });
      }
   });
});


// My Partner
let hoverEnabled3 = true;
let switchEnabled3 = true;
const slider3 = document.querySelector('.slider3');
const dummy3 = document.querySelectorAll('.dummy3');
const item3 = document.querySelectorAll('.item3');
const dropleft3 = document.querySelector('.dropleft3');
const droplefth13 = dropleft3.querySelector('h1');

function paused3(element) {
   element.onclick = null;
   hoverEnabled3 = !hoverEnabled3;
   item3.forEach(item3 => {
      const images = item3.querySelectorAll('img');
      images.forEach(img => {
         img.classList.remove('size');
      });
      item3.style.opacity = '1';
   });
   const itemParent3 = element.closest('.item3');
   const clickables3 = getComputedStyle(itemParent3).getPropertyValue('--position').trim();

   // Na click na

   if (itemParent3.classList.contains('above')) {
      playSound5();
      element.classList.remove('hovered');
      element.classList.remove('size');
      slider3.classList.remove('left');
      dummy3.forEach(dummy3 => {
         dummy3.style.opacity = '0';
      });
      switch (clickables3) {
         case '1':
            droplefth13.innerHTML = '';
            break;
         case '2':
            droplefth13.innerHTML = '';
            break;
         case '3':
            droplefth13.innerHTML = '';
            break;
      }


      dropleft3.classList.remove('left');
      setTimeout(() => {
         slider3.classList.remove('nospin');
         item3.forEach(item3 => {
            item3.classList.remove('paused');
            item3.classList.remove('below');
         });
         setTimeout(() => {
            itemParent3.classList.remove('above');
            itemParent3.classList.remove('below');
            setTimeout(() => {
               element.onclick = function () {
                  paused3(element);
               };
               switchEnabled3 = true;
            }, 100);
         }, 1000);
      }, 2400);

      // Di pa na click

   } else {
      playSound6();
      switchEnabled3 = false;
      element.classList.add('hovered');
      item3.forEach(item3 => {
         item3.classList.add('paused');
         item3.classList.add('below');
      });
      itemParent3.classList.remove('below');
      itemParent3.classList.add('above');
      dummy3.forEach(dummy3 => {
         dummy3.style.opacity = '0';
      });
      setTimeout(() => {
         slider3.classList.add('nospin');
         setTimeout(() => {
            element.classList.add('size');
            slider3.classList.add('left');
            dropleft3.classList.add('left');

            switch (clickables3) {
               default:
                  droplefth13.innerHTML = "My Partner - Me and my Girlfriend Hillary are together for almost 4 years now. Believe it or not we met in a video game on my birthday. At that time she didn't knew it was my birthday because I didn't tell her. She really is the gift in my life, of all the day we could've met it's my birthday. I'm really thankful and grateful to all the things that we both did together. We've been through rain and sunshine fixing all the problem we came across. Till death do us part, my Love."
               break;
            }

            setTimeout(() => {
               element.onclick = function () {
                  paused3(element);
               };
            }, 100);
         }, 500);
      }, 300)
   }
}
item3.forEach((hoveredItem) => {
   hoveredItem.addEventListener('mouseenter', () => {
      if (hoverEnabled3) {
         slider3.classList.add('hovered');
         item3.forEach((otherItem) => {
            if (otherItem !== hoveredItem) {
               otherItem.style.opacity = '0.25';
               dummy3.forEach(dummy3 => {
                  dummy3.style.opacity = '0.40';
               });
            }
         });
      }
      if (switchEnabled3) {
         console.log("play");
         playSound7();
      } else {
         console.log("no play");
      }
   });
   hoveredItem.addEventListener('mouseleave', () => {
      if (hoverEnabled3) {
         slider3.classList.remove('hovered');
         item3.forEach((otherItem) => {
            otherItem.style.opacity = '1';
            dummy3.forEach(dummy3 => {
               dummy3.style.opacity = '1';
            });
         });
      }
   });
});


