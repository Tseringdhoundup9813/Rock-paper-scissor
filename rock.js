

const  image = ['image/paper.jpeg','../image/scissor.jpg','image/rock.jpg']


const button =document.getElementById('button');

const rock =document.querySelector('#rock');
const paper =document.querySelector('#paper');
const scissor =document.querySelector('#scissor');

const h_img = document.querySelector('#h-img');
const c_img =document.querySelector('#c-img');

const h_s = document.querySelector('#hs');
const c_s = document.querySelector('#cs');
let h;
const win = document.querySelector('.win');
const draw = document.querySelector('.draw');
var rps;


rock.addEventListener('click',function(){
	  rps =h_img.src =image[2];
	

})
paper.addEventListener('click',function(){
	rps = h_img.src =image[0];
	

})
scissor.addEventListener('click',function(){
	rps=  h_img.src =image[1]


	
})





// computer






var humanscore =0;
var computerscore =0;
button.addEventListener('click',function(){
const random =Math.floor(Math.random() * image.length);
	c_img.src =image[random];

	var re = image.indexOf(rps);


	function RPS(c,h){
			
			var hs = 0;
			var cs = 0;
			if(h > c ){
			console.log("you win ");
			hs +=1;
			}
			else if(c > h ){
			console.log("you win computer");
			cs += 1;
			}
			else if(c == h | h == c){
			draw.style.display ="flex";
			draw.style.transition ="all 5s";
			setTimeout(function(){
				draw.style.display="none";
			},2000)
		
			
			}
			console.log(hs);
			humanscore += hs;
		computerscore += cs;
		h_s.firstChild.data = humanscore;
		c_s.firstChild.data = computerscore;
		if(humanscore == 3){
			win.style.display ="flex";
			draw.style.transition ="all 5s";
			humanscore = 0;
			computerscore=0;
		}
		
		if (computerscore==3){
			win.style.display ="flex";
			draw.style.transition ="all 5s";
			win.innerHTML ="you lose click here to play again";
			humanscore = 0;
			computerscore=0;

		}
		
		win.addEventListener('click',function(){
			win.style.display ="none";
			h_s.firstChild.data = 0;
		c_s.firstChild.data = 0;

		})

	}
		
	



	RPS(random,re);

})




// engine

