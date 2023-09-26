package rafaelswr.dev.movies.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data //generate gettters e settes implicitamente
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;

    private List<String> genres;
    private List<String> backdrops;

    @DocumentReference //Database will just store the ids of the reviews, e as reviews vao estar em uma
    // colecao diferente (Reviews)
    /***
     *
     * if (1movie-manyreviews) we dont need @DocumentReference
     */
    private List<Review> reviewsIds;




}
