
    const LinksSocialMedias = {
        github : "Thais1011",
        instagram : "thaismonteoliva",
        twitter : "MonteolivaThais"
        }
    
        function changeSocialMediaLinks () {
            for (let li of socialLinks.children){
                const social = li.getAttribute('class')
    
                li.childrens [0].href = `https://${social}.com/${linksSocialMedia[social]}`
            }
         }
        
        changeSocialMediaLinks ()

        function getGithubProfileInfos(){
            const url =`https://api.github.com/users/${linksSocialMedia.github}`
            
            fetch (url).
            then(response => response.json())
            .then(data =>{
                userName.textContent = data.name 
                userBio.textContent = data.bio
                userLink.href = data.html_url
                userPhoto.src = data.avatar_url
                userLogin.textContent = data.login
            })

        }

        getGithubProfileInfos ()