// on connait une fonction $( ".target" ).show(); qui nous donne la prochaine balise
// on connait .show() qui rend une balise visible

// pour notre scroll loader
// detecter un scroll = console.log("scroll")
//		on verifie qu'on est en bas de page = if ((scrollHeight - scrollPosition) / scrollHeight === 0)
//			on selectionne le dernier element de la page
//			on rend visible l'image qui vient apres cet element
//			on donne l'id #last a l'element qu'on a rendu visible (comment on change un id google stp ????)



$(document).ready(function () 
{
	
	
	$(document).scroll(function () 
	{

		if ($(window).scrollTop() +1 >= $(document).height() - $(window).height()) // on active ici le bas de page
			{	
				var last = $("#last") //on dit ce qu'est la variable last donc l'endroit avec l'id #last
				var next = last.next() //on dit ce qu'est la variable next qui est donc la variable last 
										//qui passe "à la suite" avec .next()
				next.show()				//on active la visibilité de next

				last.removeAttr("id") 		//mais on dit qu'on enlève à la variable last l'attribut "id"

				next.attr("id","last") // on finit pas activer l'attribut de changement d'id, pas last sur next ...
			}
	})
})