export function drawStatusText (context, input, player){
    context.font = "30px Helvetica"
    context.fillText('TECLA PRESIONADA: ' + input.lastKey, 20,50)
    //context.fillText('Active state: ' + player.currentState.state,20,100)
}