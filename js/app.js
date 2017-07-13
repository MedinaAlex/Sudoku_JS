// Déclaration du module
var myApp = angular.module('sudoku', []);

// Controller du sudoku
myApp.controller('sudokuCtrl', ['$scope', function ($scope) {
    // Notre grille de jeu
    $scope.grille = [
        ["","",1,7,"","",5,"",9],
        [5,7,3,"",2,4,1,"",6],
        [8,"","",5,"",1,"","",2],
        [7,"","",2,9,5,"",1,8],
        ["","",9,4,"","",3,"",5],
        [6,5,2,8,"","","","",7],
        [4,6,5,"",8,"","",7,1],
        ["","","",1,5,9,"","",4],
        [9,"",8,"","",7,"",5,3]
    ];

    // méthode pour changer une valeur dans une case
    $scope.change = function(x, y, valeur){
        $scope.grille[x][y] = parseInt(valeur.slice(-1)) 
    }

    // Méthode de vérification de la grille
    $scope.check = function(){
        retour = true;

        // On vient récupérer les valeurs selon les lignes et colonnes
        for (var x = 0; x < 9; x++) {
            var ligne = []
            var col = []
            for (var y = 0; y < 9; y++) {
                if($scope.grille[x][y] > 0){
                    ligne.push($scope.grille[x][y])
                 } if($scope.grille[y][x] > 0){
                    col.push($scope.grille[y][x])
                }
            };

            // On utilise des ensembles
            var setLigne = new Set(ligne)
            var setCol = new Set(col)
            
            // Si on a pas 9 valeurs différentes en ligne ou colonne, on a perdu
            if(setLigne.size != 9 || setCol.size != 9) {
                retour = false;
                break;
            }
        }

        if(retour){
            $scope.resultat = "Gagné"
        }
        else {
            $scope.resultat  = "Perdu"
        }
    }
}])