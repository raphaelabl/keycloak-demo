package at.htl.Boundary;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api")
public class DemoResource {

    @GET
    @Path("/user")
    @Produces(MediaType.TEXT_PLAIN)
    public String user() {
        return "You are Logged in as user";
    }

    @GET
    @Path("/admin")
    @Produces(MediaType.TEXT_PLAIN)
    public String admin(){return "You are Logged in as admin";}

}
