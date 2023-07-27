<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Utils\Image;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::paginate(10);
        $posts->each(function ($post) {
            $post->content = Str::limit($post->content, 150, '...');
            $post->show_route = route('post.show', $post->id);
        });

        return Inertia::render(
            'Post/Index',
            [
                'posts' => $posts,
                'pagination_links' => $posts->links()->elements,
                'dropdown_links' => $this->getDropdownLinks()
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Post/Create',
            [
                'action' => route('post.store'),
                'dropdown_links' => $this->getDropdownLinks()
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'description' => 'max:150',
            'cover_image' => 'image|nullable'
        ]);

        $image = $request->file('cover_image');
        $imageName = Image::SaveImage($image);

        Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'description' => $request->description,
            'cover_image' => $imageName,
            'user_id' => auth()->user()->id
        ]);

        return to_route('post.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render(
            'Post/Show',
            [
                'post' => $post,
                'dropdown_links' => $this->getDropdownLinks()
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }

    private function getDropdownLinks()
    {
        return [
            [
                'label' => 'New Post',
                'url' => route('post.create')
            ],
        ];
    }

}
