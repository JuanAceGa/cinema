import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { Theater } from "../../Theater";
import { AddTheatersServices } from "../add-theaters.services";
import { AddMoviesServices } from "../../../+movies/+add-movies/add-movies.services";

@Component({
    selector: 'cn-form-add-theaters',
    templateUrl: 'form-add-theaters.component.html'
})

export class FormAddTheatersComponent implements OnInit {
    public isSave: boolean;
    public visible: boolean;
    public genreSelec: any;
    public theater: Theater;
    public theaters: Array<any>;
    public isEdit: boolean;
    public film: any;
    public inMoviesTh: Array<any>;
    public movies: Array<any>;
    public req: boolean;
    public msg: String;

    atForm: FormGroup;
    name: FormControl;
    location: FormControl;
    movie: FormControl;
    time: FormControl;

    constructor(private service: AddTheatersServices, private serviceMovies: AddMoviesServices){}

    ngOnInit(){
        this.theater = new Theater();
        this.isSave = true;
        this.visible = false;
        this.isEdit = false;
        this.inMoviesTh = [];
        this.film = {name: '', time: ''};
        this.req = false;
        this.getLists();
        this.createFormControls();
        this.createForm();
    }

    public getLists() {
        this.serviceMovies.GetMovies().subscribe(res => this.movies = res);
        this.service.GetTheaters().subscribe(res => this.theaters = res);
    }

    public createFormControls() {
        this.name = new FormControl('', Validators.required);
        this.location = new FormControl('', Validators.required);
        this.movie = new FormControl('');
        this.time = new FormControl('');
    }

    public createForm() {
        this.atForm = new FormGroup({
            name: this.name,
            location: this.location,
            movie: this.movie,
            time: this.time
        });
    }

    public addMovie(){
        if (this.film.name !== '' && this.film.time !== '') {
            this.req = false;
            let film = {name: this.film.name, time: this.film.time}
            this.inMoviesTh.push(film);
            this.film = {name: '', time: ''};
        } else {
            this.msg = 'Movie name and time function is required!..'
            this.req = true;

            setTimeout(() => {
                this.req = false;
            }, 3000);
        }
    }

    public deleteMovie(index: number) {
        this.inMoviesTh.splice(index, 1);
        this.theater.movies.splice(index, 1);
    }

    public onSubmit() {
        var self = this;
        if (this.atForm.valid) {            
            if (!self.isEdit) {
                if (self.inMoviesTh.length > 0) {
                    this.theater.movies = this.inMoviesTh;
                    
                    this.service.AddTheather(this.theater).subscribe(function(res){
                        self.isSave = !res.data;
                        self.theater = new Theater();
                        self.atForm.reset();
                        self.visible = false;
                        self.getLists();
                    });
                } else {
                    this.msg = 'You must add at least one movie!'
                    self.req = true;

                    setTimeout(() => {
                        self.req = false;
                    }, 3000);
                }
            } else {
                if (self.inMoviesTh.length > 0) {
                    this.theater.movies = this.inMoviesTh;
                    console.log(this.theater);

                    this.service.EditTheather(this.theater).subscribe(function(res){
                        self.isSave = !res.data;
                        self.theater = new Theater();
                        self.atForm.reset();
                        self.isEdit = false;
                        self.visible = false;
                        self.getLists();
                    });
                } else {
                    this.msg = 'You must add at least one movie!'
                    self.req = true;

                    setTimeout(() => {
                        self.req = false;
                    }, 3000);
                }                
            }

            setTimeout(() => {
                this.isSave = true;
            }, 5000);
        }
    }

    public resetForm(){
        this.inMoviesTh = [];
        this.film = {name: '', time: ''};
        this.theater = new Theater();
        this.atForm.reset();
    }

    public createTheater(){
        this.visible = !this.visible;
    }

    public editTheater(theater:Theater){
        this.theater = theater;
        this.inMoviesTh = theater.movies;
        this.visible = true;
        this.isEdit = true;
    }

    public deleteTheater(theater:Theater){
        this.service.DeleteTheather(theater).subscribe(function(res){
            console.log(res);
        });
    }
}