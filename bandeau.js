document.write(`
<header>
<nav>
    <ul class="bandeau">
        <li id="logo"><a href="./index.html" title="Page d'accueil de LLM"><img src="./asserts/logo.jpg" class="logo" alt="logo"></a></li>
        <li id="accueil"><a href="./index.html" title="Page d'accueil de LLM" class="bouton">Accueil</a></li>
        <li id="apprendre">
            <a class="bouton">Apprendre</a>
            <div class="ruban_déroule">
                <ul class="liste_déroule">
                    <li><a href="./cours.html" class="menu_déroule" title="Aller à la page Cours">Cours</a></li>
                    <li><a href="./exercice.html" class="menu_déroule" title="Aller à la page Exercices">Exercices</a></li>
                </ul></div>
        </li>
        <li id="cours"><a href="./cours.html" class="bouton" title="Aller à la page Cours">Cours</a></li>
        <li id="exercice"><a href="./exercice.html" class="bouton" title="Aller à la page Exercices">Exercices</a></li>
        <li id="journal"><a href="./journal.html" class="bouton" title="Aller à la page Journal">Journal</a></li>
        <li id="connexion"><a href="./connexion.html" id="b_connexion" title="Connexion">Connexion</a></li>
    </ul>
</nav>
</header>

`);