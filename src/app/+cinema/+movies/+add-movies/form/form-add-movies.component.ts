import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

import { Movie } from "../../Movies";
import { AddMoviesServices } from "../add-movies.services";

@Component({
    selector: 'cn-form-add-movies',
    templateUrl: 'form-add-movies.component.html'
})

export class FormAddMoviesComponent implements OnInit {
    public isSave: boolean;
    public visible: boolean;
    public genreSelec: any;
    public movie: Movie;
    public genres: Array<any>;
    public languages: Array<any>;
    public movies: Array<any>;
    private isEdit: boolean;

    amForm: FormGroup;
    name: FormControl;
    genre: FormControl;
    language: FormControl;
    image: FormControl;
    synopsis: FormControl;

    constructor(private service: AddMoviesServices){}

    ngOnInit(){
        this.movie = new Movie();
        this.isSave = true;
        this.visible = false;
        this.isEdit = false;
        this.getLists();
        this.createFormControls();
        this.createForm();
    }

    public getLists() {
        this.service.GetMovies().subscribe(res => this.movies = res);
    }

    public createFormControls() {
        this.name = new FormControl('', Validators.required);
        this.genre = new FormControl('', Validators.required);
        this.language = new FormControl('', Validators.required);
        this.image = new FormControl('', [Validators.required, 
            Validators.pattern("^(https?://)?(([\\w!~*'().&=+$%-]+: )?[\\w!~*'().&=+$%-]+@)?(([0-9]{1,3}\\.){3}[0-9]{1,3}|([\\w!~*'()-]+\\.)*([\\w^-][\\w-]{0,61})?[\\w]\\.[a-z]{2,6})(:[0-9]{1,4})?((/*)|(/+[\\w!~*'().;?:@&=+$,%#-]+)+/*)$")]);
        this.synopsis = new FormControl('');
    }

    public createForm() {
        this.amForm = new FormGroup({
            name: this.name,
            genre: this.genre,
            language: this.language,
            image: this.image,
            synopsis: this.synopsis
        });
    }

    public onSubmit() {
        var self = this;
        if (this.amForm.valid) {            
            if (!self.isEdit) {
                this.service.AddMovie(this.movie).subscribe(function(res){
                    self.isSave = !res.data;
                    self.amForm.reset();
                    self.movie = new Movie();
                    self.visible = false;
                    self.getLists();
                });
            } else {
                this.service.EditMovie(this.movie).subscribe(function(res){
                    self.isSave = !res.data;
                    self.amForm.reset();
                    self.movie = new Movie();
                    self.isEdit = false;
                    self.visible = false;
                    self.getLists();
                });
            }

            setTimeout(() => {
                this.isSave = true;
            }, 5000);
        }
    }

    public resetForm(){
        this.movie = new Movie();
        this.amForm.reset();
    }

    public createMovie(){
        this.visible = !this.visible;
    }

    public editMovie(movie:Movie){
        this.movie = movie;
        this.visible = true;
        this.isEdit = true;
    }

    public deleteMovie(movie:Movie){
        this.service.DeleteMovie(movie).subscribe(function(res){
            console.log(res);
        });
    }
}