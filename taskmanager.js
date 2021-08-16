function solve() {
    let inputTask=document.querySelectorAll('input')[0];
    let inputText=document.querySelector('textArea');
    let inputDate=document.querySelectorAll('input')[1];

    const opened=document.querySelectorAll('section div')[3];
    const inprogress=document.querySelectorAll('section div')[5];
    const complete=document.querySelectorAll('section div')[7];

    document.querySelector('button').addEventListener('click',(e)=>{
        e.preventDefault();
        const article=document.createElement('article');
        const h3=document.createElement('h3');
        h3.textContent=inputTask.value;
        const paragraph=document.createElement('p');
        paragraph.textContent='Description: '+inputText.value;
        const paragraph2=document.createElement('p');
        paragraph2.textContent='Due Date: '+inputDate.value;

        const div=document.createElement('div');
        div.setAttribute('class','flex');
        
        const startBtn=document.createElement('button');
        startBtn.textContent='Start';
        startBtn.setAttribute('class','green');
        startBtn.addEventListener('click',(e)=>{
            inprogress.appendChild(article);
            e.target.remove();
            div.appendChild(finishBtn);
        })
        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.setAttribute('class','red');
        deleteBtn.addEventListener('click',(e)=>{
            article.remove();
            e.target.parentElement.remove();
        })

        const finishBtn=document.createElement('button')
        finishBtn.textContent='Finish';
        finishBtn.setAttribute('class','orange');
        finishBtn.addEventListener('click',(e)=>{
            complete.appendChild(article);
            e.target.remove();
            div.remove();
        })
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(paragraph);
        article.appendChild(paragraph2);
        article.appendChild(div);
        


        opened.appendChild(article);
    })
}
