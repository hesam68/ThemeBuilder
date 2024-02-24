<?php

/**
 * Function to output debug 
 *
 * @param mixed $data The data to be outputted
 * @return void
 */
//----------------------------------------------------------------
#region Debugger
function debugger($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
}
#endregion
//----------------------------------------------------------------



