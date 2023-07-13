<?php

namespace app\Utils;

use Illuminate\Support\Facades\Storage;

class Image
{
    // Use '$request->file('name of input')' to get the parameter required for this function
    static function SaveImage($image)
    {
        $imageName = '';

        if ($image) {
            $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
            Storage::disk('public')->put('posts/covers/' . $imageName, file_get_contents($image));
        }

        // To get the image link (remember to create a symbolic link):
        // $image = asset("storage/folder-of-your-images/" . $imageName);

        return $imageName;
    }
}
