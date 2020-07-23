package com.giacomini.server.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "SPOT")
public class Spot implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    private String description;
    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean hasFlatRail;
    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean hasBank;
    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean hasJumpRamp;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isHasFlatRail() {
        return hasFlatRail;
    }

    public void setHasFlatRail(boolean hasFlatRail) {
        this.hasFlatRail = hasFlatRail;
    }

    public boolean isHasBank() {
        return hasBank;
    }

    public void setHasBank(boolean hasBank) {
        this.hasBank = hasBank;
    }

    public boolean isHasJumpRamp() {
        return hasJumpRamp;
    }

    public void setHasJumpRamp(boolean hasJumpRamp) {
        this.hasJumpRamp = hasJumpRamp;
    }
}
