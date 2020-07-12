let tab=document.getElementsByTagName('td');
let txt=[];
let symbol="";
let containpoint=0;
for(let i in tab)
{
    if(i>=0 && i<=24)
    {
        tab[i].addEventListener('mouseover',function()
        {
            tab[i].setAttribute('style','background-color:lightgrey;');
        });
        tab[i].addEventListener('mouseout',function()
        {
            tab[i].setAttribute('style','background-color:white');
        });
        tab[i].addEventListener('keypress',function()
        {
            console.log("Hello World");
        });
        tab[i].addEventListener('click',function()
        {
            //console.log(tab[i].textContent);
            if(!(tab[i].textContent=='√x' || tab[i].textContent=='='))
                txt.push(tab[i].textContent);
            console.log(txt);
            let t=txt[txt.length-1];
            if(t)
            {
                if(t.includes('.') )
                {
                    containpoint++;
                }
            }
            if(tab[i].textContent=='√x')
            {
                let revlastval="";
                //document.getElementById('inp').value='';
                for(let i=0;i<txt.length;i++)
                {
                    if(txt[i].length>1)
                    {
                        for(let j=0;j<txt[i].length;j++)
                        {
                            if(txt[i].charAt(j)>='0' && txt[i].charAt(j)<='9' || txt[i].charAt(j)=='.')
                            {
                                revlastval+=txt[i].charAt(j);
                            }
                        }
                    }
                    else
                    {
                        revlastval+=txt[i];
                    }
                }
                let val=Math.sqrt(Number(revlastval));
                document.getElementById('inp').value=val;
                txt=[];
                txt.push(val.toString());
                containpoint=0;
            }
            console.log(containpoint);
            if(containpoint>1)
            {
                containpoint=0;
                console.log("Hello");
                document.getElementById('inp').value='0';
                txt=[];
                console.log(txt);
            }
            else
            {
            console.log("Hello");
            if(tab[i].textContent=='+' || tab[i].textContent=='-'||tab[i].textContent=='×'|| tab[i].textContent=='÷')
            {
                symbol=tab[i].textContent;
                //console.log(symbol);
            }
            if(symbol!=="" && tab[i].textContent>='-9' && tab[i].textContent<='9')
            {
                let res=0;
                if(symbol=='+' || symbol =='-' || symbol =='×' || symbol=='÷')
                {
                    let first="";
                    let ind=0;
                    let second="";
                    let point=0;
                   // let ind2=0;
                    let point1=0;
                    let third="";
                    for(let i=0;i<txt.length;i++)
                    {
                        if(txt[i]>='-9' && txt[i]<='9' || txt[i]=='.')
                        {
                            first+=txt[i];
                            if(txt[i]=='.')
                            {
                                point++;
                            }
                            if(point>1)
                            {
                                res="Calculation not possible";
                                break;
                            }
                        }
                        else if(txt[i]=='+'||txt[i]=='-'||txt[i]=='×'||txt[i]=='÷')
                        {
                            ind=i;
                            break;
                        }
                    }
                    //console.log(first);
                    if(point<=1)
                    {
                      for(let i=ind+1;i<txt.length;i++)
                      {
                        if(txt[i]>='-9' && txt[i]<='9' || txt[i]=='.')
                        {
                            second+=txt[i];
                            if(txt[i]=='.')
                            {
                                point1++;
                            }
                            if(point1>1)
                            {
                                res="Calculation not possible";
                                break;
                            }
                        }        
                      }
                    }
                    //console.log(second);
                    if(point<=1 && point1<=1)
                    {
                        if(symbol=='+')
                        {
                            res=Number(first)+Number(second);
                            symbol="";
                        }
                        else if(symbol=='-')
                        {
                            res=Number(first)-Number(second);
                            symbol="";
                        }
                        else if(symbol=='×')
                        {
                            res=Number(first)*Number(second);
                            symbol="";
                        }
                        else if(symbol=='÷')
                        {
                            res=Number(first)/Number(second);
                            symbol="";
                        }
                        point=0;
                        point1=0;
                    }
                }
               document.getElementById('inp').value=res.toString();
               txt=[];
               txt.push(res.toString());
               console.log(txt);
               console.log(res.toString());
            }
            else if(tab[i].textContent=='C' || tab[i].textContent=='CE' )
            {
                document.getElementById('inp').value="";
                txt=[];
                console.log(txt);
                point=0;
                point1=0;
                containpoint=0;
            }    
            else if(document.getElementById('inp').value==null)
                document.getElementById('inp').value=tab[i].textContent;
            else if(tab[i].textContent=='x')
            {
                txt.pop();
                txt.pop();
                let r='';
                console.log("Hello"+txt);
                for(let i=0;i<txt.length;i++)
                {
                    r+=txt[i];
                }
                if(r=='')
                    document.getElementById('inp').value='0';
                else
                {
                    document.getElementById('inp').value=r;
                }
            }
            
            else if(tab[i].textContent=='x2')
            {
                txt.pop();
                let re='';
                for(let i=0;i<txt.length;i++)
                {
                    re+=txt[i];
                }
                let va=Number(re)*Number(re);
                txt=[];
                document.getElementById('inp').value=va.toString();
                txt.push(va.toString());

            }
            else if(tab[i].textContent=='1/x')
            {
                txt.pop();
                //console.log(txt);
                let re1='';
                for(let i=0;i<txt.length;i++)
                {
                    re1+=txt[i];
                }
                let va1=1/Number(re1);
                txt=[];
                containpoint=0;
                document.getElementById('inp').value=va1.toString();
                txt.push(va1.toString());

            }
            else if(tab[i].textContent=='=')
            {
                let re2=document.getElementById('inp').value;
                document.getElementById('inp').value=re2;
            }
            else if(tab[i].textContent=='%')
            {
                txt.pop();
                let r="";
                for(let i=0;i<txt.length;i++)
                {
                    r+=txt[i]
                }
                document.getElementById('inp').value=(r/100).toString();
                txt=[];
                txt.push((r/100).toString());
            }
            else if(tab[i].textContent=='+∕−')
            {
                txt.pop();
                let rw='';
                for(let i=0;i<txt.length;i++)
                {
                    rw+=txt[i];
                }
                let t='';
                if(rw.length>0)
                {
                    t="-"+rw;
                }
                console.log(t);
                txt=[];
                txt.push(t);
               
            }
            else
            {
                if(tab[i].textContent!='√x')
                {
                    let text=document.getElementById('inp').value;
                    text+=tab[i].textContent;
                    document.getElementById('inp').value=text;
                }
            }
          }
      
        });
         
    }
    
    let keytxt=[];
    symbol="";
    let firstno="";
    let secondno="";
    let next=[];
    inp.addEventListener('input',function(e)
    {
       let l=e.target.value;
       console.log(l);
       let last=e.target.value.toString().charAt(l.length-1);
       if(next.length>0)
       {
           for(let j=0;j<next.length;j++)
           {
              for(let i=0;i<tab.length;i++)
                {
                    if(tab[i].textContent==next[j])
                    {
                     tab[i].setAttribute("style","background-color:white");      
                    }
                }
            }
       }
       
       if((last>='0' && last<='9') || last=='+' || last=='-' || last=='*' || last=='/' || last=='=')
        {
            for(let i=0;i<tab.length;i++)
            {
                if(tab[i].textContent==last)
                {
                    tab[i].setAttribute("style","background-color:lightgrey");
                    next.push(last);
                    break;
                }  
            }
            let indx=0;
            let indy=0;
            if(last=='*')
            {
                for(let i=0;i<tab.length;i++)
                {
                    if(tab[i].textContent=='×')
                    {
                        indx=i;
                        break;
                    }
                }
                if(tab[indx].textContent=='×')
                {
                    tab[indx].setAttribute("style","background-color:lightgrey");
                    next.push('×');
                }
            }
            else if(last=='/')
            {
                for(let i=0;i<tab.length;i++)
                {
                    if(tab[i].textContent=='÷')
                    {
                        indy=i;
                        break;
                    }
                }
                if(tab[indy].textContent=='÷')
                {
                    tab[indy].setAttribute("style","background-color:lightgrey");
                    next.push('÷');
                }

            }
        }    
        if((last>='0' && last<='9') || last=='+' || last=='-' || last=='*' || last=='/')
        {
            txt=[];
            txt.push(e.target.value);
        }
        else
        {
            document.getElementById('inp').value='0';
            txt=[];
            txt.push('0');
        }
       console.log(txt);
        if(last=='+' || last=='-' || last=='*' || last=='/')
        {
            symbol=last;
            // document.getElementById('inp').value=;
         }
         let key=txt[txt.length-1];
          //console.log(keytxt);//console.log(document.getElementById('inp').value);
          
        if(symbol!="" && key.charAt(key.length-1)>='0' && key.charAt(key.length-1)<='9')
        {
            let index=0;
            firstno="";
            secondno="";
            for(let i=0;i<key.length;i++)
                {
                    if(key.charAt(i)>='0' && key.charAt(i)<='9' || key.charAt(i)=='.')
                    {
                        firstno+=key.charAt(i);
                    }
                    else
                    {
                        index=i;
                        break;
                    }
                }
            for(let i=index+1;i<key.length;i++)
            {
                if(key.charAt(i)>='0' && key.charAt(i)<='9' || key.charAt(i)=='.')
                {
                    secondno+=key.charAt(i);
                }
            }
            if(symbol=='+')
            {
                
                let val=Number(firstno)+Number(secondno);
                document.getElementById('inp').value=val.toString();
                txt=[];
                txt.push(val.toString());
                console.log(txt);
                symbol="";
            }
            else if(symbol=='-')
            {
                
                let val=Number(firstno)-Number(secondno);
                document.getElementById('inp').value=val.toString();
                txt=[];
                txt.push(val.toString());
                console.log(txt);
                symbol="";
            }
            else if(symbol=='*')
            {
                
                let val=Number(firstno)*Number(secondno);
                document.getElementById('inp').value=val.toString();
                txt=[];
                txt.push(val.toString());
                console.log(txt);
                symbol="";
            }
            else if(symbol=='/')
            {
                
                let val=Number(firstno)/Number(secondno);
                document.getElementById('inp').value=val.toString();
                txt=[];
                txt.push(val.toString());
                console.log(txt);
                symbol="";
            }
            else if(symbol=='=')
            {
                let val= document.getElementById('inp').value;
                txt=[];
                txt.push(val.toString());
                console.log(txt);
                symbol="";
            }

        }

    });  
    
}
